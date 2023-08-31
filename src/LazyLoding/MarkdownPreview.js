function delayForDemo(promise) {
      return new Promise(resolve => {
        setTimeout(resolve, 2000);
      }).then(() => promise);
    }
    function Loading() {
      return <p><i>Loading...</i></p>;
    }  
    export default function MarkdownPreview() {
          return (<div>
          Hello....
            </div>
          );
        }