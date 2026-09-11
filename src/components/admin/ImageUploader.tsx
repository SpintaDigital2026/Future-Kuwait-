import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Upload, X } from "lucide-react";

interface Props {
  value: string | null;
  previewUrl: string | null;
  onChange: (path: string | null) => void;
  folder: string;
}

export function ImageUploader({ value, previewUrl, onChange, folder }: Props) {
  const [busy, setBusy] = useState(false);
  const [localPreview, setLocalPreview] = useState<string | null>(null);

  async function handleFile(file: File) {
    setBusy(true);
    try {
      const path = `${folder}/${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const { error } = await supabase.storage.from("resources").upload(path, file, { cacheControl: "3600" });
      if (error) { alert(error.message); return; }
      const { data } = await supabase.storage.from("resources").createSignedUrl(path, 60 * 60);
      setLocalPreview(data?.signedUrl ?? null);
      onChange(path);
    } finally {
      setBusy(false);
    }
  }

  const shown = localPreview ?? previewUrl;

  return (
    <div className="space-y-2">
      {shown ? (
        <div className="relative overflow-hidden rounded-md border">
          <img src={shown} alt="" className="aspect-[16/9] w-full object-cover" />
          <button
            type="button"
            onClick={() => { setLocalPreview(null); onChange(null); }}
            className="absolute right-2 top-2 rounded-full bg-background/90 p-1 shadow"
            aria-label="Remove image"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <label className="flex aspect-[16/9] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed text-sm text-muted-foreground hover:bg-muted/40">
          <Upload className="h-5 w-5" />
          <span>{busy ? "Uploading…" : "Upload cover image"}</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
          />
        </label>
      )}
      {value && <p className="truncate text-xs text-muted-foreground">{value}</p>}
    </div>
  );
}
