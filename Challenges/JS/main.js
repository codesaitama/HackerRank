export function print(type, data){
  if(type === 'head'){
    document.querySelector('#root').innerHTML += `<span style='font-weight: bold; color: #C31344;'>${(data)}</span></br>`;
  }
  
  if(type === 'body'){
    document.querySelector('#root').innerHTML += `<span>${(data)}</span><br/>`;
  }
}

export const isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export const h = 'head';
export const b = 'body';