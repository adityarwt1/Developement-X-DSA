package com.coupling.response;

public class ResponseWrapper<T> {

    private boolean success;
    private T data;
    private ErrorInfo error;
    private int status;

    public ResponseWrapper() {
    }

    public ResponseWrapper(boolean success, T data, ErrorInfo error, int status) {
        this.success = success;
        this.data = data;
        this.error = error;
        this.status = status;
    }

    public static <T> ResponseWrapper<T> success(T data, int status) {
        return new ResponseWrapper<>(true, data, null, status);
    }

    public static <T> ResponseWrapper<T> failure(String message, int status) {
        return new ResponseWrapper<>(false, null, new ErrorInfo(message, status), status);
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public ErrorInfo getError() {
        return error;
    }

    public void setError(ErrorInfo error) {
        this.error = error;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
