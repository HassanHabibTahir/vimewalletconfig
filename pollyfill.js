import { Buffer } from 'buffer';
import process from 'process';
import util from 'util';

window.global = window;
window.process = process;
window.Buffer = Buffer;
window.util = util;
