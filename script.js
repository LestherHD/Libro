document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');

  function showPage(id) {
    pages.forEach(page => {
      if (page.id === id) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
  }

  document.querySelectorAll('button[data-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      showPage(btn.getAttribute('data-target'));
    });
  });

  showPage('page0');
});