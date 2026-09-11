import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Upload, X, FileText } from "lucide-react";

interface Props {
  value: string | null;
  filename: string | null;
  onChange: (path: string | null, filename: string | null) => void;
  folder: string;
}

export function PdfUploader({ value, filename, onChange, folder }: Props) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setError(null);
    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file.");
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      setError("PDF must be under 50MB.");
      return;
    }
    setBusy(true);
    try {
      const safe = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
      const path = `${folder}/${crypto.randomUUID()}-${safe}`;
      const { error: e } = await supabase.storage.from("resources").upload(path, file, {
        cacheControl: "3600",
        contentType: "application/pdf",
      });
      if (e) { setError(e.message); return; }
      onChange(path, file.name);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-2">
      {value ? (
        <div className="flex items-center justify-between rounded-md border bg-muted/30 px-3 py-2.5">
          <div className="flex min-w-0 items-center gap-2 text-sm">
            <FileText className="h-4 w-4 shrink-0 text-primary" />
            <span className="truncate">{filename ?? value.split("/").pop()}</span>
          </div>
          <button
            type="button"
            onClick={() => onChange(null, null)}
            className="rounded-full p-1 text-muted-foreground hover:bg-background"
            aria-label="Remove PDF"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed py-8 text-sm text-muted-foreground hover:bg-muted/40">
          <Upload className="h-5 w-5" />
          <span>{busy ? "Uploading…" : "Upload PDF (max 50MB)"}</span>
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
          />
        </label>
      )}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
