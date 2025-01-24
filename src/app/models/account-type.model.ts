class AccountType {
    id: number;
    category: string;
    subCategory: string;

    constructor(object: any) {
        this.id = object.id ? object.id : null;
        this.category = object.category ? object.category : null;
        this.subCategory = object.subCategory ? object.subCategory : null;
    }
    get_id() {
        return this.id;
    }
    set_id(id: number) {
        this.id = id;
    }
    get_category() {
        return this.category;
    }
    set_category(category: string) {
        this.category = category;
    }
    get_subCategory() {
        return this.subCategory;
    }
    set_subCategory(subCategory: string) {
        this.subCategory = subCategory;
    }
}