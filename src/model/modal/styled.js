const styled = `
  <style>
    .modal {
      background-color: #fff;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      right: -385px;
      position: fixed;
      top: 0;
      transition: 618ms cubic-bezier(0.77, 0, 0.175, 1);
      width: 385px;
      z-index: 2;
    }

    .modal__close {
      align-items: center;
      background-color: transparent;
      border: none;
      border-radius: 24px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      margin-top: 12px;
      padding: 13px;
      position: absolute;
      right: 20px;
      top: 0;
      width: 40px;
      z-index: 1;
    }

    .modal__close img {
      height: 12px;
      width: 12px;
    }
    
    .modal__close:hover {
      background-color: #ecf0f1;
    }

    .modal__sup {
      align-items: center;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      display: flex;
      flex-direction: column;
      height: 35%;
      position: relative;
    }

    .modal__title {
      padding: 14px;
      text-align: center;
    }

    .modal__sup img {
      bottom: -110px;
      height: 285px;
      position: absolute;
      width: 285px;
    }

    .modal__stat {
      display: grid;
      gap: 15px;
      grid-template-columns: 1fr;
      padding: 24px 40px;
    }

    .modal__desc {
      align-items: center;
      display: flex;
      gap: 24px;
      justify-content: space-between;
    }

    .modal__overlayer {
      align-items: center;
      background-color: #fff;
      display: none;
      height: 100%;
      justify-content: center;
      left: 0;
      opacity: 0.5;
      position: fixed;
      top: 0;
      width: 100%;
    }

    .steel {
      background-color: #f4f4f4;
    }
    
    .fire {
      background-color: #eb4d4b;
    }
    
    .grass {
      background-color: #6ab04c;
    }
    
    .electric {
      background-color: #f6e58d;
    }
    
    .water,
    .ice {
      background-color: #7ed6df;
    }
    
    .ground {
      background-color: #8395a7;
    }
    
    .rock {
      background-color: #d5d5d4;
    }
    
    .fairy {
      background-color: #ff9ff3;
    }
    
    .poison {
      background-color: #6D214F;
      color: #f5f5f5;
    }
    
    .bug {
      background-color: #cc8e35;
    }
    
    .dragon {
      background-color: #97b3e6;
    }
    
    .psychic {
      background-color: #eaeda1;
    }
    
    .flying {
      background-color: #c7ecee;
      color: #000;
    }
    
    .fighting {
      background-color: #E6E0D4;
    }
    
    .normal {
      background-color: #ced6e0;
    }
    
    .ghost {
      background-color: #57606f;
      color: #f5f5f5;
    }
    
    .dark {
      background-color: #2d3436;
      color: #f5f5f5;
    }
  </style>
`

export default styled