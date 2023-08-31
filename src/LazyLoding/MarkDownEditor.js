import { useState, Suspense, lazy } from 'react';
const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.js')));
export default function MarkdownEditor() {
  const [showPreview, setShowPreview] = useState(false);
 
  return (
    <>
        <label>
        <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
        Show preview
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <h2>Preview</h2>
          <MarkdownPreview />
        </Suspense>
      )}
    </>
  );
}

