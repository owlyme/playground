const fs = require('fs');
const svg2img = require('svg2img');

 const svgString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="83" height="83" viewBox="0 0 83 83"><g  transform="translate(3, 70) scale(0.07, -0.07)"><!-- 先将完整的字以灰色字体绘制完成，层级位于下面 --><path data-v-e176ae28="" d="M 272 567 Q 306 613 342 669 Q 370 718 395 743 Q 405 753 400 769 Q 396 782 365 808 Q 337 827 316 828 Q 297 827 305 802 Q 318 769 306 741 Q 267 647 207 560 Q 150 476 72 385 Q 60 375 58 367 Q 54 355 70 358 Q 82 359 109 384 Q 155 421 213 493 Q 226 509 241 527 L 272 567 Z" style="fill: rgb(31, 31, 31);"></path><path data-v-e176ae28="" d="M 241 527 Q 262 506 258 375 Q 258 374 258 370 Q 254 253 221 135 Q 215 114 224 80 Q 236 44 248 32 Q 267 16 279 44 Q 294 86 294 134 Q 303 420 314 485 Q 321 515 295 543 Q 289 549 272 567 C 251 589 227 553 241 527 Z" style="fill: rgb(31, 31, 31);"></path><path data-v-e176ae28="" d="M 503 532 Q 527 510 555 520 Q 795 608 782 549 Q 783 543 743 468 Q 736 458 741 453 Q 745 447 756 459 Q 852 532 894 549 Q 904 552 905 561 Q 906 574 876 592 Q 852 605 828 621 Q 800 637 783 630 Q 686 590 521 560 C 492 555 479 550 503 532 Z" style="fill: rgb(184, 184, 184);"></path><path data-v-e176ae28="" d="M 568 72 Q 531 81 494 91 Q 482 94 483 86 Q 484 79 494 71 Q 569 7 596 -33 Q 611 -49 626 -36 Q 659 -3 661 82 Q 655 149 655 345 Q 656 382 667 407 Q 676 426 659 439 Q 634 461 604 470 Q 585 477 577 469 Q 571 462 582 447 Q 619 384 603 127 Q 597 82 589 74 Q 582 67 568 72 Z" style="fill: rgb(184, 184, 184);"></path><path data-v-e176ae28="" d="M 444 320 Q 419 262 385 208 Q 364 180 381 144 Q 388 128 409 139 Q 460 181 468 264 Q 472 295 467 319 Q 463 328 456 328 Q 449 327 444 320 Z" style="fill: rgb(184, 184, 184);"></path><path data-v-e176ae28="" d="M 738 307 Q 789 249 847 168 Q 860 146 876 139 Q 885 138 893 146 Q 908 159 900 204 Q 891 264 743 338 Q 734 345 731 332 Q 728 319 738 307 Z" style="fill: rgb(184, 184, 184);"></path><path data-v-e176ae28="" d="M 521 560 Q 561 621 602 708 Q 620 751 638 773 Q 645 786 639 799 Q 633 811 602 830 Q 572 846 554 843 Q 535 839 546 817 Q 561 795 552 757 Q 513 619 407 448 Q 398 436 397 430 Q 394 418 409 423 Q 439 432 503 532 L 521 560 Z" style="fill: rgb(255, 17, 17);"></path></g></svg>`
 

//1. Convert from svg string
svg2img(svgString, {
    'quality': 100,
    resvg: {
        fitTo: {
            mode: 'width', // or height
            value: 120
        },
    }
},function(error, buffer) {
    //returns a Buffer
    console.log(buffer);
    fs.writeFileSync('./foo1.png', buffer);
});