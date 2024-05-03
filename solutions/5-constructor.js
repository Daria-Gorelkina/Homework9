// BEGIN
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.getX = function() {
    return this.x;
};

Point.prototype.getY = function() {
    return this.y;
};

function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function() {
    return this.beginPoint;
};

Segment.prototype.getEndPoint = function() {
    return this.endPoint;
};

function reverse(segment) {
    const reversedBeginPoint = new Point(segment.endPoint.getX(), segment.endPoint.getY());
    const reversedEndPoint = new Point(segment.beginPoint.getX(), segment.beginPoint.getY());
    return new Segment(reversedBeginPoint, reversedEndPoint);
}

export { Point, Segment, reverse };
// END
