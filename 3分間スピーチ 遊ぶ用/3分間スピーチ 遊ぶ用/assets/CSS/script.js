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

  // const yearInput=document.getElementById('year');
  // const monthInput=document.getElementById('month');
  // const dayInput=document.getElementById('day');
   // const btnInput=document.getElementById('btn');
  // const resultSpan=document.getElementById('result');

  // btnInput.addEventListener('click',function() {
  //   const value1=parseFloat(yearInput.value);
  //   const value2=parseFloat(monthInput.value);
  //   const value3=parseFloat(dayInput.value);

  //   if (!isNaN(value1) && !isNaN(value2) && !isNaN(value3) {
  //     const sum=value1 + value2 + value3;
  //     resulutSpan.textContent=sum;
  //     console.log(`実行:${sum}`);
  //   } else {
  //     resultSoan.textContent='有効な数字を入力してください';
  //   }
  //  ) });
