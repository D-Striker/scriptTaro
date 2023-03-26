const wrap = document.querySelector(".wrapper");

const imgArr = [
    {
        name: 1,
        path: "public/img/1.jpg"
    },
    {
        name: 2,
        path: "public/img/2.jpg"
    },
    {
        name: 3,
        path: "public/img/3.jpg"
    },
];


wrap.innerHTML = `
<div>
    <img src="${imgArr[0].path}">
    <p>10 кубков</p>
</div>
<div>
    <img src="${imgArr[1].path}">
    <p>10 мечей</p>
</div>
<div>
    <img src="${imgArr[2].path}">
    <p>10 пентаклей</p>
</div>
`





