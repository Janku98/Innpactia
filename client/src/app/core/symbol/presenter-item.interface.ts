export interface PresenterItemState<T = any> {
    state: 'loading' | 'loaded' | 'error';
    payload?: T;
}

export interface ResponseGeneral<T = any> {
    results: T;
    error: string;
    success: boolean;
}
