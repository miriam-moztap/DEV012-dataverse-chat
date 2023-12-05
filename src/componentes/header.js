export const header = () =>{
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent="MusicArt";
    header.appendChild(h1);
    return header;
}