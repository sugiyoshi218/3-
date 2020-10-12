'use strict';

function create(col){
    const source =[];
    for (let i=0; i<15;i++){
        source[i]=i+1+15*col;
    }
    
    const column =[];
    for(let i=0; i<5;i++){
        column[i]=source.splice(Math.floor(Math.random()*source.length),1)[0];
    }
    return column;
}

function createCol(){
    const columns=[];
    for(let i=0;i<5;i++){
        columns[i]=create(i);
    }
    columns[2][2]='FREE';
    return columns;
}

function createBingo(columns){
    const bingo =[];
    for(let r=0;r<5;r++){
        bingo[r]=[];
        for(let c=0;c<5;c++){
            bingo[r][c]= columns[c][r];
        }
    }
    return bingo;
}

function renderBingo(bingo){
    for(let row =0;row<5;row++){
        const tr = document.createElement('tr');
        for(let col=0;col<5;col++){
            const td = document.createElement('td');
            td.textContent=bingo[row][col];
            tr.appendChild(td);
        }
        document.querySelector('tbody').appendChild(tr);
    }
}
const columns= createCol();
const bingo= createBingo(columns);
renderBingo(bingo);