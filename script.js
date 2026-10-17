document.querySelector('#print-cv')?.addEventListener('click',()=>window.print());
document.querySelector('#copy-email')?.addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('nfathullaev10@gmail.com');status.textContent='Email copied to clipboard.';}catch{status.textContent='Email: nfathullaev10@gmail.com';}});
