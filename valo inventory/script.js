let calc = document.getElementById("calc");
// console.log(calc)
let select = document.querySelectorAll("select");
select.forEach((element) => {
  element.onclick = () => {
    // console.log(`${element.value} selected`);
    // console.log(`${element.name} selected`)
    let imageID = element.name;
    let img = document.getElementById(`${imageID}`);
    // console.log(img)
    if (element.value == "premium") {
      img.src =
      `/premium/${imageID}.png`;
    } else if (element.value == "default") {
        img.src=`${imageID}.png`
    }
  };
});

const calculate = () => {
  let skinType = document.querySelectorAll("select");
  let totalAmt = 0;
  skinType.forEach((element) => {
    if (element.value == "premium") {
      totalAmt += 1750;
    }
  });
  console.log(totalAmt);
  let inr = totalAmt / 1.25;
  document.getElementById("total").innerText = `${totalAmt} VP = ₹${inr}`;
};

calc.onclick = () => {
  calculate();
  // console.log("calculate clicked")
};
