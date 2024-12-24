export default abstract class Model<T> {
    protected factory(model: T): void;
    protected casts(): {
        created_at: string;
        updated_at: string;
        deleted_at: string;
    };
    private hasCast;
    private getCast;
    protected castTo(cast: string, key: string, value: any): any;
}
