export class Hotel {
  constructor(
    //   ID
    private _id: number,
    // ホテルの地域
    private _place: string,
    // ホテル名
    private _name: string,
    // ホテル住所
    private _address: string,
    // ホテルの最寄り駅
    private _station: string,
    // ホテルの価格
    private _price: number,
    // フラグ
    private _flag: boolean
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get place(): string {
    return this._place;
  }

  public set place(place: string) {
    this._place = place;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get address(): string {
    return this._address;
  }

  public set address(address: string) {
    this._address = address;
  }

  public get station(): string {
    return this._station;
  }

  public set station(station: string) {
    this._station = station;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    this._price = price;
  }

  public get flag(): boolean {
    return this._flag;
  }

  public set flag(flag: boolean) {
    this._flag = flag;
  }
}
