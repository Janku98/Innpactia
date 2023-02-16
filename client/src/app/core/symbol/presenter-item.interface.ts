export interface PresenterItemState<T = any> {
    state: 'loading' | 'loaded' | 'error';
    payload?: T;
}
