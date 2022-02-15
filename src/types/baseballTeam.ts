export class baseballTeam {
  constructor(
    // id
    private _id: number,
    // 球団名
    private _teamName: string,
    // 本拠地
    private _headquarters: string,
    // 発足日
    private _inauguration: Date,
    // 歴史
    private _history: string
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get 球団名(): undefined {
    return this.球団名;
  }

  public set 球団名(球団名: undefined) {
    this.球団名 = 球団名;
  }

  public get teamName(): string {
    return this._teamName;
  }

  public set teamName(teamName: string) {
    this._teamName = teamName;
  }

  public get 本拠地(): undefined {
    return this.本拠地;
  }

  public set 本拠地(本拠地: undefined) {
    this.本拠地 = 本拠地;
  }

  public get headquarters(): string {
    return this._headquarters;
  }

  public set headquarters(headquarters: string) {
    this._headquarters = headquarters;
  }

  public get 発足日(): undefined {
    return this.発足日;
  }

  public set 発足日(発足日: undefined) {
    this.発足日 = 発足日;
  }

  public get inauguration(): Date {
    return this._inauguration;
  }

  public set inauguration(inauguration: Date) {
    this._inauguration = inauguration;
  }

  public get 歴史(): undefined {
    return this.歴史;
  }

  public set 歴史(歴史: undefined) {
    this.歴史 = 歴史;
  }

  public get history(): string {
    return this._history;
  }

  public set history(history: string) {
    this._history = history;
  }

  //
}
