const fs = require('fs');
const svg2img = require('svg2img');

const hanziPath = path.join(process.cwd(), `/public/hanzi`)
const pngsDir = path.join(process.cwd(), `/page/public/pngs`)
if (!fs.existsSync(pngsDir)) {
    fs.mkdirSync(pngsDir, { recursive: true })
}

function resortPath(pathes = [], redIndex = 0) {
    const _pathes = [...pathes]
    const redPath = _pathes.splice(redIndex, 1);
    const blackPath = _pathes.splice(0, redIndex - 1);
    return [
        ..._pathes.map(path => ({
            path,
            color: "rgb(184, 184, 184)"
        })),
        ...blackPath.map(path => ({
            path,
            color: "rgb(31, 31, 31)"
        })),
        ...redPath.map(path => ({
            path,
            color: "rgb(255, 17, 17)"
        }))
    ]
}

function createSvgString(pathes = []) {
    const pathTemp = (path, color) => `<path d="${path}" style="fill: ${color}"></path>`;

    return pathes.map((_, index) => resortPath(pathes, index)).map((newPathes, index) => {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="83" height="83" viewBox="0 0 83 83"><g  transform="translate(3, 70) scale(0.07, -0.07)">${
            newPathes.map(({path, color}) => pathTemp(path, color)).join('')
            }</g></svg>`
    })
}


const  pathes = [
    "M 122 596 Q 112 603 83 609 Q 73 613 69 608 Q 63 604 70 588 Q 95 527 105 429 Q 106 399 122 379 Q 137 358 142 372 Q 148 387 147 410 L 144 443 Q 131 543 130 571 C 129 592 129 592 122 596 Z",
    "M 260 467 Q 275 555 298 581 Q 317 605 296 616 Q 278 626 254 640 Q 241 647 194 622 Q 173 613 122 596 C 94 586 101 563 130 571 L 206 592 Q 225 596 230 590 Q 237 584 231 550 Q 224 510 214 465 C 208 436 255 437 260 467 Z",
    "M 147 410 Q 153 410 161 412 Q 198 422 279 435 Q 289 436 289 445 Q 289 452 260 467 C 245 475 243 474 214 465 Q 174 452 144 443 C 115 434 117 408 147 410 Z",
    "M 366 463 Q 417 441 463 412 Q 473 399 487 409 Q 500 416 509 438 Q 528 490 470 571 Q 437 619 510 693 Q 516 702 523 705 Q 541 718 530 731 Q 517 747 479 764 Q 458 771 446 759 Q 410 726 358 709 C 330 699 344 671 373 680 Q 398 687 427 702 Q 440 709 448 702 Q 452 698 447 682 Q 417 595 425 583 Q 425 582 428 578 Q 467 500 453 487 Q 446 474 421 477 Q 394 481 366 479 C 336 478 339 475 366 463 Z",
    "M 358 709 Q 334 728 306 736 Q 296 737 290 729 Q 286 722 294 711 Q 321 650 325 574 Q 337 292 296 149 Q 289 121 293 101 Q 303 65 316 52 Q 328 39 338 53 Q 365 83 369 228 Q 368 345 366 463 L 366 479 Q 365 636 373 680 C 375 697 375 697 358 709 Z",
    "M 800 667 Q 854 673 938 674 Q 957 675 961 683 Q 965 695 949 707 Q 894 744 849 727 Q 705 694 539 665 Q 520 662 534 647 Q 564 622 600 631 Q 675 655 753 662 L 800 667 Z",
    "M 577 511 Q 567 518 536 524 Q 526 527 522 523 Q 518 519 524 504 Q 546 456 559 377 Q 560 355 575 338 Q 588 319 594 332 Q 598 344 597 362 L 593 393 Q 583 462 581 486 C 579 510 579 510 577 511 Z",
    "M 702 404 Q 718 467 738 486 Q 757 507 738 519 Q 722 529 700 544 Q 684 553 668 543 Q 649 530 623 523 Q 602 517 577 511 C 548 504 552 479 581 486 Q 584 487 651 502 Q 670 505 674 498 Q 677 495 661 414 C 655 385 694 375 702 404 Z",
    "M 597 362 Q 604 362 612 364 Q 642 371 707 379 Q 717 380 717 389 Q 717 395 702 404 C 683 416 683 416 661 414 Q 654 414 644 410 Q 616 400 593 393 C 564 384 567 361 597 362 Z",
    "M 728 141 Q 703 148 673 156 Q 660 160 661 152 Q 661 143 672 134 Q 739 79 782 35 Q 794 25 808 43 Q 853 98 845 181 Q 827 436 838 600 Q 844 628 837 639 Q 828 652 800 667 C 774 683 741 689 753 662 Q 753 655 761 644 Q 773 619 773 576 Q 777 458 780 188 Q 779 154 768 141 Q 756 134 728 141 Z"
  ]

createSvgString(pathes).forEach((svgString, index) {
    svg2img(svgString, {
        'quality': 100,
        resvg: {
            fitTo: {
                mode: 'width', // or height
                value: 120
            },
        }
    }, function (error, buffer) {
        fs.writeFileSync('./index.png', buffer);
    });
})
