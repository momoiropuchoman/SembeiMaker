const SCREEN_W = 180;
const SCREEN_H = 180;

const CANVAS_W = SCREEN_W * 2;
const CANVAS_H = SCREEN_H * 2;

const FIELD_W = SCREEN_W * 2;
const FIELD_H = SCREEN_H * 2;

let num_sembei = 0;
let increment_sembei = 1;

function rand(min, max)
{
  return Math.floor(Math.random() * (max-min+1)) + min;
}

function update()
{
  const num_sembei_element = document.getElementById("num_sembei");
  num_sembei_element.textContent = String(num_sembei);

  const increment_sembei_element = document.getElementById("increment_sembei");
  increment_sembei_element.textContent = String(increment_sembei);
}

function on_click_bake()
{
   num_sembei += increment_sembei;
   update();
}

function on_click_reinforce()
{
  if(num_sembei > cost_sembei)
  {
   num_sembei -= cost_sembei;
   increment_sembei += 1;
   cost_sembei = increment_sembei * 100;
   update();
  }
}



class Machine
{
  constructor(index, price, capability)
  {
    this.index = index;
    this.price = price;
    this.capability = capability;
  }

  get_sold()
  {
    const id = "machine" + String(this.index);
    const machine_element = document.getElementById(id);
    machine_element.style.opacity = 0.1;
  }
}

let machines = [];
machines[0] = new Machine(0, 100, 2);
machines[1] = new Machine(1, 150, 3);
machines[2] = new Machine(2, 500, 10);
machines[3] = new Machine(3, 1000, 20);
machines[4] = new Machine(4, 2000, 50);

function buy_machine(index)
{
  if(machines[index].price <= num_sembei)
  {
    num_sembei -= machines[index].price;
    increment_sembei = machines[index].capability;
    machines[index].get_sold();

    update();
  }
}