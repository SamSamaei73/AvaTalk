import Box from "../Boxs";

interface Information {
    firstName:string;
    lastName:string;
    phone:string;
    job:string;
    company:string;
    location:Location;
    imageurl:string;
    banelImage:string;
}

interface Location {
    lat:number,
    lng:number
}

class User {
    public boxs:Array<Box> = []

    constructor(public information?:Information){}
    public resolveImageUrl() {
        if(this.information?.imageurl!= ''){
            return this.information?.imageurl
        }
        return `https://ui-avatars.com/api/?name=${this.information?.firstName}+${this.information?.lastName}`
    }
    public resolveBackImageUrl() {
        if(this.information?.banelImage!= ''){
            return this.information?.banelImage
        }
        return '/Carbon/BackgroundProfileImage.png'       
    }
    public updateImageurl(base64Image:string|ArrayBuffer|null) {
        if(this.information){
            console.log('updated')
            this.information.imageurl= base64Image as string
            this.syncToLocalStorage()
        }
    }

    public updateBackgroundurl(base64Image:string|ArrayBuffer|null) {
        if(this.information){
            this.information.banelImage= base64Image as string
            this.syncToLocalStorage()
        }
    }
    private syncToLocalStorage () {
        localStorage.setItem('authUser',JSON.stringify(new User(this.information)))
    }

    public addBox(newBox:Box) {
        if(this.boxs.filter((item) => item.getTypeName() == newBox.getTypeName()).length > 0){
            this.boxs.splice(this.boxs.findIndex((item) => item.getTypeName() == newBox.getTypeName()),1)
        }
        this.boxs.push(newBox)
        this.syncToLocalStorage()
    }

    public setBox(newBoxs:Array<Box>){
        this.boxs = newBoxs
        this.syncToLocalStorage()
    }
} 
export default User