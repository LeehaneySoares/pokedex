const maxProgress = 100

export default (stats, target) =>
  stats.forEach((props) => (
    target.querySelector('.modal__stat')
      .innerHTML += `
      <li class="modal__desc">
        <label>${props.stat?.name}:</label>
        <progress value="${props.base_stat}" max="${maxProgress}"></progress>
      </li>
      `
  ))