export function Graph() {
  const pyscript = `
  <pyscript>
    import pyscript
    pyscript.run('graph.py')
  </pyscript>
    `;

  return <py-script dangerouslySetInnerHTML={{ __html: pyscript }} />;
}
