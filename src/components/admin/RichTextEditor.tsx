import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { Bold, Italic, List, ListOrdered, Heading2, Heading3, Quote, Link2, Image as ImageIcon, Undo, Redo } from "lucide-react";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  valueJson: unknown | null;
  onChange: (json: unknown, html: string) => void;
}

export function RichTextEditor({ valueJson, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ inline: false }),
      Link.configure({ openOnClick: false, autolink: true }),
      Placeholder.configure({ placeholder: "Write the case study body…" }),
    ],
    content: valueJson ?? "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => onChange(editor.getJSON(), editor.getHTML()),
  });

  useEffect(() => {
    if (editor && valueJson && editor.isEmpty) {
      editor.commands.setContent(valueJson as never);
    }
  }, [editor, valueJson]);

  if (!editor) return <div className="h-64 rounded-md border bg-muted/30 animate-pulse" />;

  const Btn = ({ active, onClick, children, label }: { active?: boolean; onClick: () => void; children: React.ReactNode; label: string }) => (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`rounded p-1.5 text-sm hover:bg-muted ${active ? "bg-muted text-foreground" : "text-muted-foreground"}`}
    >
      {children}
    </button>
  );

  async function handleImageUpload() {
    if (!editor) return;
    const ed = editor;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      const path = `case-studies/inline/${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const { error } = await supabase.storage.from("resources").upload(path, file, { cacheControl: "3600" });
      if (error) { alert(error.message); return; }
      const { data } = await supabase.storage.from("resources").createSignedUrl(path, 60 * 60 * 24 * 365);
      if (data?.signedUrl) ed.chain().focus().setImage({ src: data.signedUrl, alt: file.name }).run();
    };
    input.click();
  }

  function handleLink() {
    if (!editor) return;
    const url = window.prompt("URL", (editor.getAttributes("link").href as string | undefined) ?? "https://");
    if (url === null) return;
    if (url === "") editor.chain().focus().unsetLink().run();
    else editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }

  return (
    <div className="rounded-md border bg-background">
      <div className="flex flex-wrap items-center gap-1 border-b p-1.5">
        <Btn label="Bold" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}><Bold className="h-4 w-4" /></Btn>
        <Btn label="Italic" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}><Italic className="h-4 w-4" /></Btn>
        <Btn label="Heading 2" active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}><Heading2 className="h-4 w-4" /></Btn>
        <Btn label="Heading 3" active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}><Heading3 className="h-4 w-4" /></Btn>
        <Btn label="Bullet list" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}><List className="h-4 w-4" /></Btn>
        <Btn label="Ordered list" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}><ListOrdered className="h-4 w-4" /></Btn>
        <Btn label="Quote" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}><Quote className="h-4 w-4" /></Btn>
        <Btn label="Link" active={editor.isActive("link")} onClick={handleLink}><Link2 className="h-4 w-4" /></Btn>
        <Btn label="Image" onClick={handleImageUpload}><ImageIcon className="h-4 w-4" /></Btn>
        <div className="ml-auto flex gap-1">
          <Btn label="Undo" onClick={() => editor.chain().focus().undo().run()}><Undo className="h-4 w-4" /></Btn>
          <Btn label="Redo" onClick={() => editor.chain().focus().redo().run()}><Redo className="h-4 w-4" /></Btn>
        </div>
      </div>
      <EditorContent editor={editor} className="prose prose-sm max-w-none min-h-[300px] p-4 focus:outline-none [&_.ProseMirror]:min-h-[280px] [&_.ProseMirror]:outline-none" />
    </div>
  );
}
