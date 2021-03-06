import * as Mat4Func from './functions/Mat4Func.js';

export class Mat4 extends Float32Array {
    constructor(array = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]) {
        super(array);
        return this;
    }

    set x(v) {
        this[12] = v;
    }

    get x() {
        return this[12];
    }

    set y(v) {
        this[13] = v;
    }

    get y() {
        return this[13];
    }

    set z(v) {
        this[14] = v;
    }

    get z() {
        return this[14];
    }

    set w(v) {
        this[15] = v;
    }

    get w() {
        return this[15];
    }

    set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        if (m00.length) {
            return this.copy(m00);
        }
        Mat4Func.set(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
    }

    translate(v, m = this) {
        Mat4Func.translate(this, m, v);
        return this;
    }

    rotateX(v, m = this) {
        Mat4Func.rotateX(this, m, v);
        return this;
    }

    rotateY(v, m = this) {
        Mat4Func.rotateY(this, m, v);
        return this;
    }

    rotateZ(v, m = this) {
        Mat4Func.rotateZ(this, m, v);
        return this;
    }

    scale(v, m = this) {
        Mat4Func.scale(this, m, typeof v === "number" ? [v, v, v] : v);
        return this;
    }

    multiply(ma, mb) {
        if (mb) {
            Mat4Func.multiply(this, ma, mb);
        } else {
            Mat4Func.multiply(this, this, ma);
        }
        return this;
    }

    identity() {
        Mat4Func.identity(this);
        return this;
    }

    copy(m) {
        Mat4Func.copy(this, m);
        return this;
    }

    fromPerspective({fov, aspect, near, far} = {}) {
        Mat4Func.perspective(this, fov, aspect, near, far);
        return this;
    }

    fromOrthogonal({left, right, bottom, top, near, far}) {
        Mat4Func.ortho(this, left, right, bottom, top, near, far);
        return this;
    }

    fromQuaternion(q) {
        Mat4Func.fromQuat(this, q);
        return this;
    }

    setPosition(v) {
        this.x = v[0];
        this.y = v[1];
        this.z = v[2];
        return this;
    }

    invert(m = this) {
        Mat4Func.invert(this, m);
        return this;
    }

    compose(q, pos, scale) {
        Mat4Func.fromRotationTranslationScale(this, q, pos, scale);
        return this;
    }

    getRotation(q) {
        Mat4Func.getRotation(q, this);
        return this;
    }

    getTranslation(pos) {
        Mat4Func.getTranslation(pos, this);
        return this;
    }

    getScaling(scale) {
        Mat4Func.getScaling(scale, this);
        return this;
    }

    lookAt(eye, target, up) {
        Mat4Func.targetTo(this, eye, target, up);
        return this;
    }

    determinant() {
        return Mat4Func.determinant(this);
    }
}
