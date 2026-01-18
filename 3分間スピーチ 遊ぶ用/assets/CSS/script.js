const yearSelect=document.getElementById('year');
const monthSelect=document.getElementById('month');
const daySelect=document.getElementById('day');

const today=new Date();
const currentYear=today.getFullYear();

for (let y=1960;y <= currentYear;y++) {
  const option=document.createElement('option');
  option.value=y;
  option.textContent=y;
  yearSelect.appendChild(option);
}

for (let m=1;m <= 12;m++) {
  const option=document.createElement('option');
  option.value=m;
  option.textContent=m;
  monthSelect.appendChild(option);
}

function updateDays() {
  const selectedMonth=parseInt(monthSelect.value);
  const selectedYear=parseInt(yearSelect.value);
  const lastDay=new Date(selectedYear,selectedMonth,0).getDate();

  daySelect.innerHTML='';
  for (let d=1;d <=lastDay;d++) {
    const option=document.createElement('option');
    option.value=d;
    option.textContent=d;
    daySelect.appendChild(option);
  }
}

yearSelect.addEventListener('change',updateDays);
monthSelect.addEventListener('change',updateDays);
updateDays();

const yearInput=document.getElementById('year');
const monthInput=document.getElementById('month');
const dayInput=document.getElementById('day');
const btnInput=document.getElementById('btn');
const resultSpan=document.getElementById('result');

btnInput.addEventListener('click',function(e) {
  e.preventDefault();
  const value1=parseFloat(yearInput.value);
  const value2=parseFloat(monthInput.value);
  const value3=parseFloat(dayInput.value);

//   if (!isNaN(value1) && !isNaN(value2) && !isNaN(value3)) {
//     const sum=value1 + value2 + value3;
//     resultSpan.textContent=sum;
//     console.log(`実行:${sum}`);
//   } else {
//     resultSpan.textContent='有効な数字を入力してください';
//   }
//  });

  switch ((value1 + value2 + value3) %10==1) {
    case 1:
      console.log("スンスンとの相性10%");
      break;
    case 2:
      console.log("スンスンとの相性20%");
      break;
    case 3:
      console.log("スンスンとの相性30%");
      break;
    case 4:
      console.log("スンスンとの相性40%");
      break;
    case 5:
      console.log("スンスンとの相性50%");
      break;
    case 6:
      console.log("スンスンとの相性60%");
      break;
    case 7:
      console.log("スンスンとの相性70%");
      break;
    case 8:
      console.log("スンスンとの相性80%");
      break;
    case 9:
      console.log("スンスンとの相性90%");
      break;
    case 0:
      console.log("スンスンとの相性100%");
      break;

  }
});