export default abstract class BaseModel {
    attributes: any;
    protected constructor();
    create(model?: any): void;
    abstract resource(): string;
    find<T>(id: number): Promise<T | undefined>;
    update<T>(): Promise<T | undefined>;
    protected casts(): {
        created_at: string;
        updated_at: string;
        deleted_at: string;
    };
    private hasCast;
    private getCast;
    protected castTo(cast: string, key: string, value: any): any;
}
