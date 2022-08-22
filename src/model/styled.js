const styled = `
  <style>
    header {
      background-color: rgba(93, 81, 87, 0.0, .9);
      height: 60px;
      margin: 0 auto;
      max-width: 100vw;
    }

    .header__icon {
      height: 40px;
      object-fit: contain;
      width: 40px;
    }

    .header__logo {
      height: 40px;
      width: 80px;
    }

    .header__menu-mobile {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    
    .header__menu-mobile .menu-icon {
      height: 30px;
      width: 30px;
    }

    .container {
      align-items: center;
      display: flex;
      justify-content: space-between;
      height: 100%;
      margin: 0 auto;
      max-width: 1020px;
      padding: 0 10px;
    }

    .main.container {
      justify-content: center;
    }

    poke-shelf {
      width: 100%;
    }

    .footer {
      background-color: #1e1e1e;
      color: #f5f5f5;
      height: 130px;
      width: 100%;
    }
  </style>
`

export default styled