// list card
function prevListCard() {

    const element = document.querySelector(".cardItem");
    const widthItem = element.offsetWidth;
    const listCardItem = document.querySelector(".list-card");
    const listCard = listCardItem.offsetWidth;

    listCardItem.scrollLeft -= widthItem;
    

}

function nextListCard() {
    
    const element = document.querySelector(".cardItem");
    const widthItem = element.offsetWidth;
    const listCardItem = document.querySelector(".list-card");
    const listCard = listCardItem.offsetWidth;
    
    listCardItem.scrollLeft += widthItem;
    
}
// end list card