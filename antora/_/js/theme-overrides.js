(() => {
  const editLink = document.querySelector('.edit-this-page a');
  if (!editLink) {
    return;
  }

  editLink.textContent = 'Source';
  editLink.setAttribute('aria-label', 'View source');
  editLink.setAttribute('title', 'View source');
})();
