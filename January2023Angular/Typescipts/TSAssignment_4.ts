class item {
    public itemId: number;
    private itemName: string;
    public itemPrice: number;
    private itemCategory: string;
    constructor(itemId: number, itemName: string, itemPrice: number, itemCategory: string) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemCategory = itemCategory;
    }
    display = () => {
        console.log("itemId=" + this.itemId + ",itemName=" + this.itemName + ",ItemPrice=" + this.itemPrice + ",ItemCategory=" + this.itemCategory);
    }

}
//Test
let item1: item = new item(1, 'Mobile', 20000, 'Phone');
item1.display();