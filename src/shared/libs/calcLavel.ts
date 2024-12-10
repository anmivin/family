/* Level = floor(sqrt(XP / XP_PER_LEVEL))

Where:

XP is the total experience points earned by the character (i.e., the user)
XP_PER_LEVEL is a constant that determines how much XP is required to reach the next level
floor rounds the result down to the nearest whole number

Easy tasks: 10-50 XP (e.g., "Read 15 pages of a new book", "Take a 10-minute walk")
Medium tasks: 50-200 XP (e.g., "Complete a short online course", "Write a 500-word article")
Challenging tasks: 200-500 XP (e.g., "Complete an HTML online course", "Run a 5K")
Exceptional t asks: 500-1000 XP (e.g., "Write a 10,000-word essay", "Complete a marathon")*/

export enum TASK_XP {
  easy = 10,
  mid = 50,
  challeng = 200,
  exepti = 500,
}

export const calcLavel = (level: number) => 100 * (level ^ 2);
