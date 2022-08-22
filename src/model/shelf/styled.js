const styled = `
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .pokemon__figure {
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 3px 3px 2px #ddd;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      padding: 24px;
    }

    .pokemon__figure:hover {
      box-shadow: 3px 3px 2px #a29bfe;
      transition: 618ms cubic-bezier(0.77, 0, 0.175, 1);
    }
    
    .pokemon__figure[type="steel"] {
      background-color: #f4f4f4;
    }
    
    .pokemon__figure[type="fire"] {
      background-color: #eb4d4b;
    }
    
    .pokemon__figure[type="grass"] {
      background-color: #6ab04c;
    }
    
    .pokemon__figure[type="electric"] {
      background-color: #f6e58d;
    }
    
    .pokemon__figure[type="water"],
    .pokemon__figure[type="ice"] {
      background-color: #7ed6df;
    }
    
    .pokemon__figure[type="ground"] {
      background-color: #8395a7;
    }
    
    .pokemon__figure[type="rock"] {
      background-color: #d5d5d4;
    }
    
    .pokemon__figure[type="fairy"] {
      background-color: #ff9ff3;
    }
    
    .pokemon__figure[type="poison"] {
      background-color: #6D214F;
      color: #f5f5f5;
    }
    
    .pokemon__figure[type="bug"] {
      background-color: #cc8e35;
    }
    
    .pokemon__figure[type="drago"] {
      background-color: #97b3e6;
    }
    
    .pokemon__figure[type="psychic"] {
      background-color: #eaeda1;
    }
    
    .pokemon__figure[type="flying"] {
      background-color: #c7ecee;
      color: #000;
    }
    
    .pokemon__figure[type="fighting"] {
      background-color: #E6E0D4;
    }
    
    .pokemon__figure[type="normal"] {
      background-color: #ced6e0;
    }
    
    .pokemon__figure[type="ghost"] {
      background-color: #57606f;
      color: #f5f5f5;
    }
    
    .pokemon__figure[type="dark"] {
      background-color: #2d3436;
      color: #f5f5f5;
    }

    .pokemon__figure[type="dragon"] {
      background-color: #B53471;
    }

    .pokemon__figure > img {
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 80px;
      object-fit: contain;
      width: 150px;
    }

    .pokemon__caption {
      border-top: 1px solid #f5f5f5;
      display: flex;
      flex-direction: column;
      padding: 10px 0;
      text-align: center;
      width: 100%;
    }

    .poke__shelf {
      align-items: center;
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      margin: 0 auto;
      max-width: 1020px;
      padding: 40px 20px;
      width: 100%;
    }

    @media (min-width: 525px) {
      .poke__shelf {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    @media (min-width: 769px) {
      .poke__shelf {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  </style>
`

export default styled