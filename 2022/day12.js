import { exec } from "./base.js";

const testinput = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`;

const rawinput = `abaaacccccccccaaaaaaccccccccccccccccaacccccccccccaacaaaaaaaaaaaaaaaaaccaaaaacccaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaa
abaaacccccccccaaaaaacccccccccccccccaaaaccccccccccaaaaaaaacaaaaaaaaaaaccaaaaaaccaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaa
abaaaccccccccccaaaaacccccccccccccccaaaacccccccccccaaaaacccaaaaaaaaaacccaaaaaacccaaccccccccccccccaaaaacccccccccccccccccccccccccccccccccccccaaaaaa
abccccaaccccccaaaaacccccccccaaaaaccaaaaccccccccccccaaaaacaaaaaaaaacccccaaaaaccccccccccccccccccccaaaaacccccccccccccccccaaaccccaaaccccccccccaaacaa
abcccaaaacccccaaaaacccccccccaaaaacccccccccccccccccaaacaaaaaaaaaacccccccaaaaacccccccccccccccccccaaaaaacccccccccccccccccaaaaccaaaaccccccccccccccaa
abcccaaaaacacccccccccccccccaaaaaaccccccccccccccccccaaccaaaaacaaaaccccccccccccccccccccccccccccccaaaaaaccccccccccccccccccaaaaaaaacccccccccccccccaa
abaaaaaaaaaacccccccccccccccaaaaaaccccccccccccccccccccccaaaacccaaaccccccccccccccccccccccccccccccaaaaaacccccccccccccccciiiiijaaaaccccccccccccccccc
abaaaaaaaaaacccccccccccccccaaaaaacccccccccccccccccccccccccccccaaacccccccccccccccccccccccccccccccaaaccccccccccccccccciiiiiijjjaccccccccaaaccccccc
abccaaaaaaccccccccccccccccccaaaccccccccccccccccccccccccccccccccacccccccccccaacccccccccccccccccccccccccccccccccccccciiiiioijjjjaaccccccaaaaaacccc
abccaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaacccccccccccccccccccccccccccccccccccciiinnooojjjjjaaccaaaaaaaacccc
abccaaaaaacccccccccccccccccccccccccccccccccccccaacccccaacccccccccccccccccaaaaaacccccccccccccccccccccccccccaaaccccciiinnnoooojjjjjjkkkaaaaaaacccc
abcaaaaaaaaccccccccccccccccccccccccccccccccccccaaaccaaaaaaccccaaacccccccccaaaacccccccccccccccccccccccccccccaaaaccciiinnnouooojjjjkkkkkaaaaaccccc
abccaccccccccccccccccccaaccccccaccccccccccccaaaaaaaaaaaaaacccaaaacccccccccaaaacccccccccccccccccccccccccccaaaaaacchhinnnttuuooooookkkkkkkaaaccccc
abccccccccccccccccccaacaaaccccaaaaaaaaccccccaaaaaaaacaaaaacccaaaacccccccccaccacccccccccccccccccccccccccccaaaaacchhhhnntttuuuooooppppkkkkcaaacccc
abccccccccaaacccccccaaaaaccccccaaaaaaccccccccaaaaaacaaaaaccccaaaaccccccccccccccccccccccccccccaccccccccccccaaaaahhhhnnntttxuuuooppppppkkkcccccccc
abccccccccaaaacccccccaaaaaaccccaaaaaaccaaacccaaaaaacaaaaaccccccccccccccaaccccccccccccccaaaaaaaacccccccccccaachhhhhnnnntttxxuuuuuuuupppkkkccccccc
abccccccccaaaacccccaaaaaaaacccaaaaaaaacaaacacaaaaaaccccccccccccccccccccaacccccccccccccccaaaaaacccccccccccccchhhhmnnnntttxxxxuuuuuuupppkkcccccccc
abacccccccaaaacccccaaaaacaaccaaaaaaaaaaaaaaaaaaccaacccccccccccccccccaaaaaaaaccccccccccccaaaaaaccccccccccccchhhhmmmntttttxxxxuyyyuvvpppklcccccccc
abacccccccccccccccccacaaaccaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccaaaaaaaacccccccccccaaaaaaaaccccccccccccgghmmmtttttxxxxxxyyyyvvvpplllcccccccc
abaccccccccaacccccccccaaaccaaaaaaaacaaaaaaaaaaccccccccccccccccccccccccaaaaccccccccccccaaaaaaaaaaccccccaccccgggmmmtttxxxxxxxyyyyyvvppplllcccccccc
SbaaaccccccaaacaaaccccccccaaaaaaaaacaaaaaaaaacccccccccccccccccccccccccaaaaacccccccccccaaaaaaaaaaaaacaaaccaagggmmmtttxxxEzzzzyyyvvppplllccccccccc
abaacccccccaaaaaaacccccccaaaaaaacaaccaaaaaaaccccccccccccccaaaccccccccaaaaaacccccccccccacacaaacccaaaaaaacaaagggmmmsssxxxxxyyyyyvvvqqqlllccccccccc
abaccccccccaaaaaaccacccaaaaaaaaacccccccaaaaaaccccccccccccaaaaccccccccaaccaacccccccccccccccaaaccccaaaaaaccaagggmmmssssxxwwyyyyyyvvqqqlllccccccccc
abaccccccaaaaaaaaccaacaaaccaaaaaacccccaaaaaaaccccccccccccaaaaccccccccccaacccccccccccccccccaacccccaaaaaaaaaaggggmmmssssswwyywyyyyvvqqlllccccccccc
abaccccccaaaaaaaaacaaaaacccaaaaaacccccaaacaaaccccccccccccaaaaccccccccaaaaaaccccccccccccaacccccccaaaaaaaaaaaaggggmmmossswwyywwyyvvvqqqllccccccccc
abcccccccaaaaaaaaaacaaaaaacaaccccccccaaacccccccccccccccccccccccccccccaaaaaaccccccccccccaaaaacccaaaaaaaaaaaaaaggggoooosswwywwwwvvvvqqqmlccccccccc
abccccccccccaaacaaaaaaaaaacccccccccccaaacaccccccccccccccccccccccccccccaaaaccccccccccccaaaaaccccaaacaaacccaaacagggfooosswwwwwrvvvvqqqqmmccccccccc
abccccccccccaaacccaaaaaaaacccccccccaacaaaaacccccccccccccccccccccccccccaaaaccccccccccccaaaaaacccccccaaacccaaccccfffooosswwwwrrrrrqqqqqmmccccccccc
abccccccccccaacccccccaaccccccccccccaaaaaaaacccccccccccccaaccccccccccccaccaccccccccccccccaaaacccccccaacccccccccccfffoossrwrrrrrrrqqqqmmmccccccccc
abccaaaccccccccccccccaacccccccccccccaaaaaccccccccccccaacaacccccccaaaaacccccccccccccccccaacccccccccccccccccccccccfffoossrrrrrnnnmqqmmmmmccccccccc
abcaaaaccccccccccccccccccccccccccccccaaaaacccccccccccaaaaacccccccaaaaacccaaaccccccccccccccccccccccccccccccccccccfffooorrrrrnnnnmmmmmmmccccaacccc
abcaaaacccccccccccccccccccccccccccccaaacaaccccacccccccaaaaaaccccaaaaaaccccaaaccacccccccccccccccccccccccccccccccccffoooonnnnnnnnmmmmmmccccaaacccc
abccaaacccccccccccccccccccccaaaaaccccaaccccaaaacccccaaaaaaaaccccaaaaaaccccaaaaaaaccccccccccccccccaccaccccccccccccfffooonnnnnnddddddddcccaaaccccc
abccccccccccccccccccccccccccaaaaaccccccccccaaaaaacccaaaaacaacccaaaaaaaccaaaaaaaacccccccccccccccccaaaaccccccccccccfffeonnnnneddddddddddcaaacccccc
abccccccccccaaaccccccccccccaaaaaacccccccccccaaaacccccacaaacccccaacaacccaaaaaaaaacccccccccccccccccaaaacccccccccccccffeeeeeeeeddddddddcccaaacccccc
abcccccccccaaaaccccacccccccaaaaaaccccccccccaaaaacccccccaaaacccaaacaccccaaaaaaaaaccccccccccccccccaaaaaaccccccccccccceeeeeeeeedacccccccccccccccccc
abaccccccccaaaaccccaaacaaacaaaaaaccccccccccaacaaccccccccaaaacaaaacaaacaaaaaaaaaacccccccccccccaacaaaaaacccccccccccccceeeeeeeaaacccccccccccccccaaa
abaaacccccccaaaccccaaaaaaaccaaaccccccccaaacccccccccccccccaaaaaaaacaaaaaaaaaaaaaaacacaaccaaacaaacccaacccccccccccccccccaacccaaaacccccccccccccccaaa
abaaaccccccccccccccaaaaaaccccccccccccccaaacccccccccccccccaaaaaaaccaaaaaaccaacccaccaaaaccaaaaaaaccccccccaaccccccccccccccccccaaacccccccccccccccaaa
abaaccccccccccccccaaaaaaacccccccccccaaaaaaaaccccccccccccccaaaaaaaaaaaaaacaaaccccccaaaaaccaaaaaaccccccaaaaccccccccccccccccccaaaccccccccccccaaaaaa
abaaaccccccccccccaaaaaaaaaacccccccccaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaacccccccaaaaaacaaaaaaaaaccccaaaaaacccccccccccccccccccccccccccccccaaaaaa`;

let startLoc = {};
let endLoc = {};

const map = [];

const parseInput = (input) => {
    let rows = input.split('\n');

    for (let y = 0; y < rows.length; y++) {
        let arr = Array.from(rows[i]);
        map.push([]);
        //console.log('row', i);
        let x = 0;
        while (arr.length) {
            let ch = arr.shift();
            //console.log(ch);
            if (ch == 'S') {
                map[map.length - 1].push('a'.charCodeAt(0) - 96);
                startLoc = { x, y: i };
            }
            else if (ch == 'E') {
                map[map.length - 1].push('z'.charCodeAt(0) - 96);
                endLoc = { x, y: i };
            }
            else map[map.length - 1].push(ch.charCodeAt(0) - 96);
            x++;
        }
    }

};

const toDir = (d) => {
    switch (d) {
        case 'n': return '^';
        case 'e': return '>';
        case 's': return 'V';
        case 'w': return '<';
    }
};
const isInList = (pos, list) => list.filter(p => p.x == pos.x && p.y == pos.y).length;

const printPath = (path) => {
    let msg = '\npath:\n';
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[0].length; x++) {
            let p = path.filter(p => p.x == x && p.y == y);
            if (p.length) {
                msg += p[0].move ?? "?";
            }
            else if (endLoc.x == x && endLoc.y == y)
                msg += '@';
            else msg += '.';
        }
        msg += '\n';
    }
    console.log(msg + `(${path.length - 1} moves)`);
};

const getTarget = (pos, dir) => {
    switch (dir) {
        case 'n': {
            return { x: pos.x, y: pos.y - 1 };
        }
        case 'w': {
            return { x: pos.x - 1, y: pos.y };
        }
        case 's': {
            return { x: pos.x, y: pos.y + 1 };
        }
        case 'e': {
            return { x: pos.x + 1, y: pos.y };
        }
    };
};


const getTile = (pos) => map[pos.y][pos.x];

const getDistance = (pos) => {
    let dX = pos.x - endLoc.x;
    let dY = pos.y - endLoc.y;
    return Math.abs(dX * dX) + Math.abs(dY * dY);
};


const canMove = (pos, dir) => {
    //console.log('canMove: ', pos, dir);

    switch (dir) {
        case 'n': {
            if (pos.y == 0) return [false];
            break;
        }
        case 'w': {
            if (pos.x == 0) return [false];
            break;
        }
        case 's': {
            if (pos.y == map.length - 1) return [false];
            break;
        }
        case 'e': {
            if (pos.x == map[0].length - 1) return [false];
            break;
        }
    };
    let target = getTarget(pos, dir);


    let res = getTile(target) - getTile(pos);
    return [res < 2, target];
};

let dirs = ['n', 'e', 's', 'w'];
let bestPath = [];
let i = 0;

const findPath = (path = [startLoc], visitedNodes = []) => {
    i++;
    let currentPos = path[path.length - 1];

    if (isInList(currentPos, visitedNodes)) return;
    visitedNodes.push(currentPos);

    if (path.length >= bestPath.length && bestPath.length != 0) return;
    let index = bestPath.findIndex(p => p.x == currentPos.x && p.y == currentPos.y);
    if (index != -1) {
        if (index < path.length) return;
    }
    if (i % 100000 == 0) {
        console.clear();
        console.log('iterations:', i);
        printPath(path, visitedNodes);
        // for (let i = 0; i < 100000000; i++);
    }
    if (currentPos.x == endLoc.x && currentPos.y == endLoc.y) {
        bestPath = path;
        return;
    }
    // Find possible targets
    let targets = [];
    for (let d of dirs) {
        let [move, target] = canMove(currentPos, d, visitedNodes);
        if (move) {
            target.score = getDistance(target);
            target.dir = d;
            targets.push(target);
        }
    }

    targets.sort((a, b) => a.score - b.score).forEach(t => {
        path[path.length - 1]['move'] = toDir(t.dir);
        findPath([...path, t], [...visitedNodes]);

    });
};

const toC = (pos) => { return { x: pos.x, y: pos.y }; };

const bfs = () => {
    let q = [startLoc];
    let visited = [startLoc];
    let parent = {};
    parent[startLoc.x] = {};
    parent[startLoc.x][startLoc.y] = null;

    while (q.length) {
        let curr = q.pop();
        //console.log('visiting', curr);

        //visited.push(curr);
        if (curr.x == endLoc.x && curr.y == endLoc.y) {
            console.log('found dest');
            break;
        }
        for (let d of dirs) {
            let [move, target] = canMove(curr, d);

            if (move && !isInList(target, visited)) {
                curr.move = toDir(d);
                visited.push(target);
                if (!parent[target.x]) parent[target.x] = {};
                parent[target.x][target.y] = curr;
                q.push(target);
            }
        }
    }


    let i = 0;
    let end = endLoc;
    let path = [];
    while (parent[end.x][end.y]) {
        i++;
        //console.log(end, i);
        path.push(end);
        end = parent[end.x][end.y];
    }
    console.log(path.length, 'steps');
    return path;
};


(() => {
    exec(() => {
        parseInput(testinput);
        //console.log(map);
        //console.log(`map ${map[0].length} x ${map.length}`);
        let path = bfs();
        printPath(path);
        //console.log('paths found:\n', paths);

        //printPath(bestPath);
        //console.log(bestPath.length - 1);

    });
})();