AFRAME.registerComponent("tour", {
    init:function(){
        this.placesContainer = this.el
        this.createCards()
    },

    createCards: function(){
        const thumbnailRef = [
            {
                id: "budapest",
                title: "Budapest",
                url: "../Thumbnails/budapest.jpg"
            },

            {
                id: "taj-mahal",
                title: "Taj Mahal",
                url: "../Thumbnails/taj_mahal.png"
            },
        ]
       
        let preX = -60;
        for (var item of thumbnailRef){
            var posX = preX +25;
            var posY = 10;
            var posZ = -40;
            
            const position = {x: posX, y: posY, z: posZ}
            preX = posX
            console.log(item[0])
            const thumbNail = this.createThumbnail(item, position)
            this.placesContainer.appendChild(thumbNail)
            
        }
    },

    createThumbnail: function(id, item, position){
        const entityEl = document.createElement("a-entity")
        const elPos = position;
        entityEl.setAttribute("id", id)
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {primitive: "circle", radius: 9})
       // entityEl.setAttribute("material", {src: item.url})
        entityEl.setAttribute("position", elPos)

        return entityEl
    }
})