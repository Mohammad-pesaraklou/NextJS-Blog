const slicer = (title) => {
  const newText = title.substring(0, 150);
  const results = `${newText}...`;
  return results;
};

export { slicer };
