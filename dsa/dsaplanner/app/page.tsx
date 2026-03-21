"use client";

import { useState, useEffect, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Difficulty = "easy" | "med" | "hard";

interface Problem {
  id: string;
  n: string;
  name: string;
  pat: string;
  d: Difficulty;
}

interface Week {
  label: string;
  problems: Problem[];
}

interface Topic {
  id: string;
  month: string;
  topic: string;
  color: string;
  bg: string;
  weeks: Week[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PLAN: Topic[] = [
  {
    id: "tp",
    month: "March 2026",
    topic: "Two Pointer",
    color: "#3B6D11",
    bg: "#EAF3DE",
    weeks: [
      {
        label: "Week 1 — Opposite ends: pairs & sums",
        problems: [
          { id: "tp1", n: "#167", name: "Two Sum II", pat: "Opposite ends", d: "easy" },
          { id: "tp2", n: "#977", name: "Squares of Sorted Array", pat: "Opposite ends", d: "easy" },
          { id: "tp3", n: "#11", name: "Container With Most Water", pat: "Opposite ends", d: "med" },
          { id: "tp4", n: "#15", name: "3Sum", pat: "Fix i + opp ends", d: "med" },
          { id: "tp5", n: "#16", name: "3Sum Closest", pat: "Fix i + opp ends", d: "med" },
          { id: "tp6", n: "#18", name: "4Sum", pat: "Fix i+j + opp ends", d: "med" },
          { id: "tp7", n: "#259", name: "3Sum Smaller", pat: "Opp ends + count", d: "med" },
        ],
      },
      {
        label: "Week 2 — Opposite ends: strings",
        problems: [
          { id: "tp8", n: "#125", name: "Valid Palindrome", pat: "Opposite ends", d: "easy" },
          { id: "tp9", n: "#680", name: "Valid Palindrome II", pat: "Opp ends + skip", d: "easy" },
          { id: "tp10", n: "#344", name: "Reverse String", pat: "Opp ends swap", d: "easy" },
          { id: "tp11", n: "#345", name: "Reverse Vowels", pat: "Opp ends + cond", d: "easy" },
          { id: "tp12", n: "#443", name: "String Compression", pat: "Read/write ptrs", d: "med" },
          { id: "tp13", n: "#42", name: "Trapping Rain Water", pat: "Opp ends + max", d: "hard" },
          { id: "tp14", n: "#189", name: "Rotate Array", pat: "Reverse trick", d: "med" },
        ],
      },
      {
        label: "Week 3 — Fast & Slow",
        problems: [
          { id: "tp15", n: "#141", name: "Linked List Cycle", pat: "Fast & Slow", d: "easy" },
          { id: "tp16", n: "#142", name: "Linked List Cycle II", pat: "Fast & Slow", d: "med" },
          { id: "tp17", n: "#876", name: "Middle of Linked List", pat: "Fast & Slow", d: "easy" },
          { id: "tp18", n: "#202", name: "Happy Number", pat: "Fast & Slow", d: "easy" },
          { id: "tp19", n: "#234", name: "Palindrome Linked List", pat: "F&S + reverse", d: "easy" },
          { id: "tp20", n: "#457", name: "Circular Array Loop", pat: "F&S on array", d: "med" },
          { id: "tp21", n: "#287", name: "Find the Duplicate", pat: "Floyd on array", d: "med" },
        ],
      },
      {
        label: "Week 4 — Same direction + mixed",
        problems: [
          { id: "tp22", n: "#26", name: "Remove Duplicates I", pat: "Write/Read", d: "easy" },
          { id: "tp23", n: "#27", name: "Remove Element", pat: "Write/Read", d: "easy" },
          { id: "tp24", n: "#283", name: "Move Zeroes", pat: "Write/Read", d: "easy" },
          { id: "tp25", n: "#80", name: "Remove Duplicates II", pat: "Write/Read+count", d: "med" },
          { id: "tp26", n: "#75", name: "Sort Colors", pat: "3 pointers", d: "med" },
          { id: "tp27", n: "#88", name: "Merge Sorted Array", pat: "Opp ends from back", d: "easy" },
          { id: "tp28", n: "#838", name: "Push Dominoes", pat: "Two ptr simulation", d: "med" },
          { id: "tp29", n: "#828", name: "Count Unique Chars", pat: "Two ptr + math", d: "hard" },
          { id: "tp30", n: "#986", name: "Interval List Intersections", pat: "Two ptr on lists", d: "med" },
        ],
      },
    ],
  },
  {
    id: "sw",
    month: "April 2026",
    topic: "Sliding Window",
    color: "#185FA5",
    bg: "#E6F1FB",
    weeks: [
      {
        label: "Week 1 — Fixed size window",
        problems: [
          { id: "sw1", n: "#643", name: "Max Average Subarray I", pat: "Fixed window", d: "easy" },
          { id: "sw2", n: "#1456", name: "Max Vowels in Substring", pat: "Fixed window", d: "med" },
          { id: "sw3", n: "#1343", name: "Subarrays Avg >= Threshold", pat: "Fixed window", d: "med" },
          { id: "sw4", n: "#2090", name: "K-Radius Subarray Avgs", pat: "Fixed window", d: "med" },
          { id: "sw5", n: "#1423", name: "Max Points from Cards", pat: "Fixed window", d: "med" },
          { id: "sw6", n: "#1652", name: "Defuse the Bomb", pat: "Fixed window", d: "easy" },
          { id: "sw7", n: "#2379", name: "Minimum Recolors", pat: "Fixed window", d: "easy" },
        ],
      },
      {
        label: "Week 2 — Variable window",
        problems: [
          { id: "sw8", n: "#3", name: "Longest Substring No Repeat", pat: "Variable window", d: "med" },
          { id: "sw9", n: "#1695", name: "Max Erasure Value", pat: "Variable window", d: "med" },
          { id: "sw10", n: "#1004", name: "Max Consecutive 1s III", pat: "Variable window", d: "med" },
          { id: "sw11", n: "#424", name: "Longest Repeating Char", pat: "Variable window", d: "med" },
          { id: "sw12", n: "#487", name: "Max Consecutive 1s II", pat: "Variable window", d: "med" },
          { id: "sw13", n: "#1208", name: "Get Equal Substrings", pat: "Variable window", d: "med" },
          { id: "sw14", n: "#2401", name: "Longest Nice Subarray", pat: "Variable window", d: "med" },
        ],
      },
      {
        label: "Week 3 — Window with HashMap",
        problems: [
          { id: "sw15", n: "#567", name: "Permutation in String", pat: "Window + freq map", d: "med" },
          { id: "sw16", n: "#438", name: "Find Anagrams in String", pat: "Window + freq map", d: "med" },
          { id: "sw17", n: "#76", name: "Minimum Window Substring", pat: "Window + map", d: "hard" },
          { id: "sw18", n: "#30", name: "Substring Concatenation", pat: "Window + map", d: "hard" },
          { id: "sw19", n: "#239", name: "Sliding Window Maximum", pat: "Window + deque", d: "hard" },
          { id: "sw20", n: "#480", name: "Sliding Window Median", pat: "Window + heaps", d: "hard" },
          { id: "sw21", n: "#1297", name: "Max Frequency Substring", pat: "Window + map", d: "med" },
        ],
      },
      {
        label: "Week 4 — Mixed practice",
        problems: [
          { id: "sw22", n: "#209", name: "Min Size Subarray Sum", pat: "Variable window", d: "med" },
          { id: "sw23", n: "#713", name: "Subarray Product Less K", pat: "Variable window", d: "med" },
          { id: "sw24", n: "#992", name: "Subarrays K Different", pat: "Window trick", d: "hard" },
          { id: "sw25", n: "#1358", name: "Substrings 3 Char Types", pat: "Window trick", d: "hard" },
          { id: "sw26", n: "#862", name: "Shortest Subarray Sum>=K", pat: "Window + deque", d: "hard" },
          { id: "sw27", n: "#1658", name: "Min Ops to Reduce X", pat: "Window complement", d: "med" },
          { id: "sw28", n: "#2134", name: "Min Swaps Group 1s", pat: "Fixed window", d: "med" },
          { id: "sw29", n: "#1493", name: "Longest Subarray After Del", pat: "Variable window", d: "med" },
          { id: "sw30", n: "#2260", name: "Min Consec Cards to Pick", pat: "Window + map", d: "med" },
        ],
      },
    ],
  },
  {
    id: "bs",
    month: "May 2026",
    topic: "Binary Search",
    color: "#534AB7",
    bg: "#EEEDFE",
    weeks: [
      {
        label: "Week 1 — Classic binary search",
        problems: [
          { id: "bs1", n: "#704", name: "Binary Search", pat: "Classic", d: "easy" },
          { id: "bs2", n: "#35", name: "Search Insert Position", pat: "Classic", d: "easy" },
          { id: "bs3", n: "#278", name: "First Bad Version", pat: "Classic", d: "easy" },
          { id: "bs4", n: "#374", name: "Guess Number Higher/Lower", pat: "Classic", d: "easy" },
          { id: "bs5", n: "#69", name: "Sqrt(x)", pat: "Classic", d: "easy" },
          { id: "bs6", n: "#367", name: "Valid Perfect Square", pat: "Classic", d: "easy" },
          { id: "bs7", n: "#744", name: "Find Smallest > Target", pat: "Classic boundary", d: "easy" },
        ],
      },
      {
        label: "Week 2 — Boundaries & rotated",
        problems: [
          { id: "bs8", n: "#34", name: "First and Last Position", pat: "Two boundaries", d: "med" },
          { id: "bs9", n: "#153", name: "Min in Rotated Array", pat: "Rotated", d: "med" },
          { id: "bs10", n: "#33", name: "Search in Rotated Array", pat: "Rotated", d: "med" },
          { id: "bs11", n: "#81", name: "Search Rotated II (dups)", pat: "Rotated", d: "med" },
          { id: "bs12", n: "#540", name: "Single Non-Duplicate", pat: "Classic binary", d: "med" },
          { id: "bs13", n: "#162", name: "Find Peak Element", pat: "Binary on answer", d: "med" },
          { id: "bs14", n: "#852", name: "Peak Index Mountain", pat: "Binary on answer", d: "med" },
        ],
      },
      {
        label: "Week 3 — Search on answer",
        problems: [
          { id: "bs15", n: "#875", name: "Koko Eating Bananas", pat: "Answer space BS", d: "med" },
          { id: "bs16", n: "#1011", name: "Ship Packages D Days", pat: "Answer space BS", d: "med" },
          { id: "bs17", n: "#1283", name: "Smallest Divisor", pat: "Answer space BS", d: "med" },
          { id: "bs18", n: "#410", name: "Split Array Largest Sum", pat: "Answer space BS", d: "hard" },
          { id: "bs19", n: "#1231", name: "Divide Chocolate", pat: "Answer space BS", d: "hard" },
          { id: "bs20", n: "#774", name: "Minimize Max Distance", pat: "Answer space BS", d: "hard" },
          { id: "bs21", n: "#2064", name: "Cats and Mice II", pat: "Answer space BS", d: "hard" },
        ],
      },
      {
        label: "Week 4 — 2D and hard",
        problems: [
          { id: "bs22", n: "#74", name: "Search 2D Matrix", pat: "2D binary search", d: "med" },
          { id: "bs23", n: "#240", name: "Search 2D Matrix II", pat: "Eliminate rows/cols", d: "med" },
          { id: "bs24", n: "#378", name: "Kth Smallest in Matrix", pat: "BS on value", d: "med" },
          { id: "bs25", n: "#658", name: "Find K Closest Elements", pat: "BS + window", d: "med" },
          { id: "bs26", n: "#1870", name: "Min Speed to Arrive", pat: "Answer space BS", d: "med" },
          { id: "bs27", n: "#2187", name: "Min Time to Complete Trips", pat: "Answer space BS", d: "med" },
          { id: "bs28", n: "#4", name: "Median of Two Arrays", pat: "Hard binary search", d: "hard" },
          { id: "bs29", n: "#302", name: "Smallest Rectangle Enclosing", pat: "BS + sweep", d: "hard" },
          { id: "bs30", n: "#1918", name: "Kth Smallest Subarray Sum", pat: "BS on answer", d: "hard" },
        ],
      },
    ],
  },
  {
    id: "hm",
    month: "June 2026",
    topic: "HashMap & HashSet",
    color: "#854F0B",
    bg: "#FAEEDA",
    weeks: [
      {
        label: "Week 1 — Frequency maps",
        problems: [
          { id: "hm1", n: "#1", name: "Two Sum", pat: "HashMap lookup", d: "easy" },
          { id: "hm2", n: "#242", name: "Valid Anagram", pat: "Freq map", d: "easy" },
          { id: "hm3", n: "#383", name: "Ransom Note", pat: "Freq map", d: "easy" },
          { id: "hm4", n: "#49", name: "Group Anagrams", pat: "Key grouping", d: "med" },
          { id: "hm5", n: "#347", name: "Top K Frequent Elements", pat: "Freq + heap", d: "med" },
          { id: "hm6", n: "#451", name: "Sort Chars by Freq", pat: "Freq map", d: "med" },
          { id: "hm7", n: "#692", name: "Top K Frequent Words", pat: "Freq + sort", d: "med" },
        ],
      },
      {
        label: "Week 2 — Prefix sum + map",
        problems: [
          { id: "hm8", n: "#560", name: "Subarray Sum Equals K", pat: "Prefix+map", d: "med" },
          { id: "hm9", n: "#525", name: "Contiguous Array", pat: "Prefix+map", d: "med" },
          { id: "hm10", n: "#974", name: "Subarray Divisible by K", pat: "Prefix+map", d: "med" },
          { id: "hm11", n: "#523", name: "Continuous Subarray Sum", pat: "Prefix+map", d: "med" },
          { id: "hm12", n: "#1371", name: "Longest Even Vowel Sub", pat: "XOR+map", d: "med" },
          { id: "hm13", n: "#437", name: "Path Sum III", pat: "Prefix+map tree", d: "med" },
          { id: "hm14", n: "#1124", name: "Longest Well-Performing", pat: "Prefix+map", d: "med" },
        ],
      },
      {
        label: "Week 3 — Counting & design",
        problems: [
          { id: "hm15", n: "#128", name: "Longest Consecutive Seq", pat: "HashSet", d: "med" },
          { id: "hm16", n: "#299", name: "Bulls and Cows", pat: "Freq map", d: "med" },
          { id: "hm17", n: "#380", name: "Insert Delete GetRandom", pat: "Map + array", d: "med" },
          { id: "hm18", n: "#454", name: "4Sum II", pat: "Two-map split", d: "med" },
          { id: "hm19", n: "#1160", name: "Find Words Formed", pat: "Freq map", d: "easy" },
          { id: "hm20", n: "#2215", name: "Find Difference of Two Arrs", pat: "HashSet diff", d: "easy" },
          { id: "hm21", n: "#653", name: "Two Sum IV (BST)", pat: "HashSet + tree", d: "easy" },
        ],
      },
      {
        label: "Week 4 — Hard problems",
        problems: [
          { id: "hm22", n: "#146", name: "LRU Cache", pat: "Map + DLL", d: "med" },
          { id: "hm23", n: "#460", name: "LFU Cache", pat: "Map + sorted", d: "hard" },
          { id: "hm24", n: "#41", name: "First Missing Positive", pat: "Index as hash", d: "hard" },
          { id: "hm25", n: "#149", name: "Max Points on a Line", pat: "Slope map", d: "hard" },
          { id: "hm26", n: "#336", name: "Palindrome Pairs", pat: "Map + check", d: "hard" },
          { id: "hm27", n: "#1442", name: "Subarray XOR = K", pat: "XOR+map", d: "med" },
          { id: "hm28", n: "#1814", name: "Count Nice Pairs", pat: "Transform+map", d: "med" },
          { id: "hm29", n: "#1711", name: "Count Good Meals", pat: "Freq map", d: "med" },
          { id: "hm30", n: "#2342", name: "Max Sum Pairs Same Digit", pat: "Freq map", d: "med" },
        ],
      },
    ],
  },
  {
    id: "st",
    month: "July 2026",
    topic: "Stack & Monotonic Stack",
    color: "#993C1D",
    bg: "#FAECE7",
    weeks: [
      {
        label: "Week 1 — Stack basics",
        problems: [
          { id: "st1", n: "#20", name: "Valid Parentheses", pat: "Stack", d: "easy" },
          { id: "st2", n: "#155", name: "Min Stack", pat: "Stack design", d: "med" },
          { id: "st3", n: "#232", name: "Queue Using Stacks", pat: "Stack design", d: "easy" },
          { id: "st4", n: "#1047", name: "Remove All Adjacent Dups", pat: "Stack", d: "easy" },
          { id: "st5", n: "#150", name: "Evaluate Reverse Polish", pat: "Stack", d: "med" },
          { id: "st6", n: "#71", name: "Simplify Path", pat: "Stack", d: "med" },
          { id: "st7", n: "#394", name: "Decode String", pat: "Stack", d: "med" },
        ],
      },
      {
        label: "Week 2 — Monotonic stack",
        problems: [
          { id: "st8", n: "#739", name: "Daily Temperatures", pat: "Mono stack", d: "med" },
          { id: "st9", n: "#496", name: "Next Greater Element I", pat: "Mono stack", d: "easy" },
          { id: "st10", n: "#503", name: "Next Greater Element II", pat: "Mono stack circular", d: "med" },
          { id: "st11", n: "#901", name: "Online Stock Span", pat: "Mono stack", d: "med" },
          { id: "st12", n: "#1019", name: "Next Greater Node List", pat: "Mono stack", d: "med" },
          { id: "st13", n: "#856", name: "Score of Parentheses", pat: "Stack math", d: "med" },
          { id: "st14", n: "#2104", name: "Sum of Subarray Ranges", pat: "Mono stack", d: "med" },
        ],
      },
      {
        label: "Week 3 — Histogram problems",
        problems: [
          { id: "st15", n: "#84", name: "Largest Rectangle Histogram", pat: "Mono stack", d: "hard" },
          { id: "st16", n: "#85", name: "Maximal Rectangle", pat: "Mono stack 2D", d: "hard" },
          { id: "st17", n: "#42b", name: "Trapping Rain Water (stack)", pat: "Mono stack", d: "hard" },
          { id: "st18", n: "#316", name: "Remove Duplicate Letters", pat: "Mono stack greedy", d: "med" },
          { id: "st19", n: "#402", name: "Remove K Digits", pat: "Mono stack greedy", d: "med" },
          { id: "st20", n: "#1673", name: "Find Most Competitive Sub", pat: "Mono stack", d: "med" },
          { id: "st21", n: "#2281", name: "Sum of Total Strength", pat: "Mono stack", d: "hard" },
        ],
      },
      {
        label: "Week 4 — Advanced",
        problems: [
          { id: "st22", n: "#907", name: "Sum of Subarray Minimums", pat: "Mono stack", d: "hard" },
          { id: "st23", n: "#1130", name: "Min Cost Tree from Leaves", pat: "Mono stack", d: "hard" },
          { id: "st24", n: "#1776", name: "Car Fleet II", pat: "Mono stack", d: "hard" },
          { id: "st25", n: "#321", name: "Create Maximum Number", pat: "Mono stack", d: "hard" },
          { id: "st26", n: "#2454", name: "Next Greater Element IV", pat: "Two mono stacks", d: "hard" },
          { id: "st27", n: "#735", name: "Asteroid Collision", pat: "Stack simulation", d: "med" },
          { id: "st28", n: "#1544", name: "Make String Great", pat: "Stack", d: "easy" },
          { id: "st29", n: "#2390", name: "Removing Stars from String", pat: "Stack", d: "med" },
          { id: "st30", n: "#2487", name: "Remove Nodes from List", pat: "Mono stack + list", d: "med" },
        ],
      },
    ],
  },
  {
    id: "tr",
    month: "Aug–Sep 2026",
    topic: "Trees & Recursion",
    color: "#0F6E56",
    bg: "#E1F5EE",
    weeks: [
      {
        label: "Week 1 — Traversals & basics",
        problems: [
          { id: "tr1", n: "#104", name: "Max Depth Binary Tree", pat: "DFS recursion", d: "easy" },
          { id: "tr2", n: "#226", name: "Invert Binary Tree", pat: "DFS recursion", d: "easy" },
          { id: "tr3", n: "#112", name: "Path Sum", pat: "DFS recursion", d: "easy" },
          { id: "tr4", n: "#94", name: "Inorder Traversal", pat: "DFS / iterative", d: "easy" },
          { id: "tr5", n: "#144", name: "Preorder Traversal", pat: "DFS / iterative", d: "easy" },
          { id: "tr6", n: "#145", name: "Postorder Traversal", pat: "DFS / iterative", d: "easy" },
          { id: "tr7", n: "#543", name: "Diameter of Binary Tree", pat: "DFS post-order", d: "easy" },
          { id: "tr8", n: "#110", name: "Balanced Binary Tree", pat: "DFS height check", d: "easy" },
        ],
      },
      {
        label: "Week 2 — BFS / level order",
        problems: [
          { id: "tr9", n: "#102", name: "Level Order Traversal", pat: "BFS queue", d: "med" },
          { id: "tr10", n: "#107", name: "Level Order II", pat: "BFS queue", d: "med" },
          { id: "tr11", n: "#103", name: "Zigzag Level Order", pat: "BFS + flag", d: "med" },
          { id: "tr12", n: "#199", name: "Right Side View", pat: "BFS last node", d: "med" },
          { id: "tr13", n: "#515", name: "Find Max in Rows", pat: "BFS", d: "med" },
          { id: "tr14", n: "#116", name: "Populate Next Pointers", pat: "BFS / two ptr", d: "med" },
          { id: "tr15", n: "#662", name: "Max Width Binary Tree", pat: "BFS + index", d: "med" },
          { id: "tr16", n: "#637", name: "Average of Levels", pat: "BFS", d: "easy" },
        ],
      },
      {
        label: "Week 3 — BST & LCA",
        problems: [
          { id: "tr17", n: "#700", name: "Search in BST", pat: "BST property", d: "easy" },
          { id: "tr18", n: "#701", name: "Insert into BST", pat: "BST property", d: "med" },
          { id: "tr19", n: "#450", name: "Delete Node in BST", pat: "BST property", d: "med" },
          { id: "tr20", n: "#235", name: "LCA of BST", pat: "BST LCA", d: "med" },
          { id: "tr21", n: "#236", name: "LCA of Binary Tree", pat: "DFS LCA", d: "med" },
          { id: "tr22", n: "#98", name: "Validate BST", pat: "In-order / bounds", d: "med" },
          { id: "tr23", n: "#230", name: "Kth Smallest in BST", pat: "In-order count", d: "med" },
          { id: "tr24", n: "#538", name: "BST to Greater Tree", pat: "Reverse in-order", d: "med" },
        ],
      },
      {
        label: "Week 4 — Hard tree",
        problems: [
          { id: "tr25", n: "#124", name: "Binary Tree Max Path Sum", pat: "DFS post-order", d: "hard" },
          { id: "tr26", n: "#297", name: "Serialize / Deserialize", pat: "BFS / DFS encode", d: "hard" },
          { id: "tr27", n: "#968", name: "Binary Tree Cameras", pat: "Greedy DFS", d: "hard" },
          { id: "tr28", n: "#99", name: "Recover BST", pat: "In-order swap", d: "med" },
          { id: "tr29", n: "#114", name: "Flatten Tree to List", pat: "Pre-order Morris", d: "med" },
          { id: "tr30", n: "#105", name: "Build Tree Pre+Inorder", pat: "Divide & conquer", d: "med" },
        ],
      },
    ],
  },
  {
    id: "dp",
    month: "Oct–Dec 2026",
    topic: "Dynamic Programming",
    color: "#A32D2D",
    bg: "#FCEBEB",
    weeks: [
      {
        label: "Week 1 — 1D DP foundations",
        problems: [
          { id: "dp1", n: "#70", name: "Climbing Stairs", pat: "1D DP", d: "easy" },
          { id: "dp2", n: "#746", name: "Min Cost Climbing Stairs", pat: "1D DP", d: "easy" },
          { id: "dp3", n: "#198", name: "House Robber", pat: "1D DP", d: "med" },
          { id: "dp4", n: "#213", name: "House Robber II (circle)", pat: "1D DP x2", d: "med" },
          { id: "dp5", n: "#322", name: "Coin Change", pat: "Unbounded knapsack", d: "med" },
          { id: "dp6", n: "#139", name: "Word Break", pat: "1D DP + set", d: "med" },
          { id: "dp7", n: "#152", name: "Max Product Subarray", pat: "1D DP track min/max", d: "med" },
          { id: "dp8", n: "#53", name: "Maximum Subarray", pat: "Kadane 1D", d: "med" },
        ],
      },
      {
        label: "Week 2 — Subsequences",
        problems: [
          { id: "dp9", n: "#300", name: "Longest Increasing Sub", pat: "1D DP / patience", d: "med" },
          { id: "dp10", n: "#1143", name: "Longest Common Subseq", pat: "2D DP", d: "med" },
          { id: "dp11", n: "#1035", name: "Uncrossed Lines", pat: "2D DP (=LCS)", d: "med" },
          { id: "dp12", n: "#516", name: "Longest Palindromic Sub", pat: "2D interval DP", d: "med" },
          { id: "dp13", n: "#647", name: "Palindromic Substrings", pat: "Expand or 2D", d: "med" },
          { id: "dp14", n: "#72", name: "Edit Distance", pat: "2D DP", d: "hard" },
          { id: "dp15", n: "#1092", name: "Shortest Common Super", pat: "2D DP", d: "hard" },
          { id: "dp16", n: "#583", name: "Delete Op Two Strings", pat: "2D DP (=edit dist)", d: "med" },
        ],
      },
      {
        label: "Week 3 — 2D Grid DP",
        problems: [
          { id: "dp17", n: "#62", name: "Unique Paths", pat: "Grid DP", d: "med" },
          { id: "dp18", n: "#63", name: "Unique Paths II", pat: "Grid DP obstacles", d: "med" },
          { id: "dp19", n: "#64", name: "Min Path Sum", pat: "Grid DP", d: "med" },
          { id: "dp20", n: "#120", name: "Triangle", pat: "Grid DP bottom-up", d: "med" },
          { id: "dp21", n: "#221", name: "Maximal Square", pat: "Grid DP", d: "med" },
          { id: "dp22", n: "#304", name: "Range Sum Query 2D", pat: "2D prefix sum", d: "med" },
          { id: "dp23", n: "#931", name: "Min Falling Path Sum", pat: "Grid DP", d: "med" },
          { id: "dp24", n: "#1277", name: "Count Squares", pat: "Grid DP", d: "med" },
        ],
      },
      {
        label: "Week 4 — Knapsack & hard",
        problems: [
          { id: "dp25", n: "#416", name: "Partition Equal Subset", pat: "0/1 knapsack", d: "med" },
          { id: "dp26", n: "#494", name: "Target Sum", pat: "0/1 knapsack", d: "med" },
          { id: "dp27", n: "#518", name: "Coin Change II", pat: "Unbounded knapsack", d: "med" },
          { id: "dp28", n: "#474", name: "Ones and Zeroes", pat: "2D knapsack", d: "med" },
          { id: "dp29", n: "#312", name: "Burst Balloons", pat: "Interval DP", d: "hard" },
          { id: "dp30", n: "#10", name: "Regular Expression Match", pat: "2D DP", d: "hard" },
        ],
      },
    ],
  },
];

const STORAGE_KEY = "dsa-full-plan-v2";

const TOTAL_PROBLEMS = PLAN.reduce(
  (s, t) => s + t.weeks.reduce((ws, w) => ws + w.problems.length, 0),
  0
);

// ─── Diff Badge ───────────────────────────────────────────────────────────────

const diffStyles: Record<Difficulty, { bg: string; color: string; border: string }> = {
  easy: { bg: "#EAF3DE", color: "#27500A", border: "#3B6D11" },
  med: { bg: "#FAEEDA", color: "#633806", border: "#854F0B" },
  hard: { bg: "#FCEBEB", color: "#791F1F", border: "#A32D2D" },
};

function DiffBadge({ d }: { d: Difficulty }) {
  const s = diffStyles[d];
  return (
    <span
      style={{
        fontSize: 10,
        padding: "2px 8px",
        borderRadius: 99,
        fontWeight: 500,
        flexShrink: 0,
        background: s.bg,
        color: s.color,
        border: `0.5px solid ${s.border}`,
      }}
    >
      {d}
    </span>
  );
}

// ─── Problem Row ──────────────────────────────────────────────────────────────

function ProblemRow({
  problem,
  done,
  onToggle,
}: {
  problem: Problem;
  done: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "7px 0",
        borderBottom: "0.5px solid #e5e5e5",
      }}
    >
      <button
        onClick={() => onToggle(problem.id)}
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          border: done ? "0.5px solid #3B6D11" : "0.5px solid #ccc",
          background: done ? "#3B6D11" : "transparent",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
          flexShrink: 0,
          transition: "all 0.15s",
        }}
        aria-label={done ? "Mark undone" : "Mark done"}
      >
        {done ? "✓" : ""}
      </button>

      <span
        style={{
          fontSize: 11,
          color: "#888",
          minWidth: 36,
          fontFamily: "monospace",
          textDecoration: done ? "line-through" : "none",
          opacity: done ? 0.5 : 1,
        }}
      >
        {problem.n}
      </span>

      <span
        style={{
          flex: 1,
          fontSize: 13,
          color: done ? "#999" : "inherit",
          textDecoration: done ? "line-through" : "none",
          opacity: done ? 0.6 : 1,
        }}
      >
        {problem.name}
      </span>

      <span
        style={{
          fontSize: 11,
          color: "#999",
          minWidth: 110,
          display: "none",
        }}
        className="prob-pat"
      >
        {problem.pat}
      </span>

      <DiffBadge d={problem.d} />
    </div>
  );
}

// ─── Topic Card ───────────────────────────────────────────────────────────────

function TopicCard({
  topic,
  index,
  doneSet,
  onToggle,
}: {
  topic: Topic;
  index: number;
  doneSet: Set<string>;
  onToggle: (id: string) => void;
}) {
  const [open, setOpen] = useState(index === 0);

  const totalProbs = topic.weeks.reduce((s, w) => s + w.problems.length, 0);
  const doneCount = topic.weeks.reduce(
    (s, w) => s + w.problems.filter((p) => doneSet.has(p.id)).length,
    0
  );
  const pct = Math.round((doneCount / totalProbs) * 100);

  return (
    <div
      style={{
        borderRadius: 12,
        border: "0.5px solid #e0e0e0",
        marginBottom: 10,
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {/* Header */}
      <div
        onClick={() => setOpen((o) => !o)}
        style={{
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          cursor: "pointer",
          userSelect: "none",
          background: open ? "#fafafa" : "#fff",
          transition: "background 0.15s",
        }}
      >
        {/* Number circle */}
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: topic.bg,
            color: topic.color,
            border: `0.5px solid ${topic.color}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 500,
            flexShrink: 0,
          }}
        >
          {index + 1}
        </div>

        {/* Title + progress */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 500, fontSize: 14 }}>
            {topic.month} — {topic.topic}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 4,
            }}
          >
            <div
              style={{
                flex: 1,
                height: 3,
                borderRadius: 2,
                background: "#eee",
              }}
            >
              <div
                style={{
                  height: 3,
                  borderRadius: 2,
                  background: topic.color,
                  width: `${pct}%`,
                  transition: "width 0.4s",
                }}
              />
            </div>
            <span style={{ fontSize: 11, color: "#999" }}>
              {doneCount}/{totalProbs}
            </span>
          </div>
        </div>

        {/* Chevron */}
        <span
          style={{
            fontSize: 11,
            color: "#999",
            marginLeft: "auto",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          ▶
        </span>
      </div>

      {/* Body */}
      {open && (
        <div style={{ borderTop: "0.5px solid #eee" }}>
          {topic.weeks.map((week, wi) => (
            <div key={wi} style={{ padding: "10px 16px 4px" }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#888",
                  textTransform: "uppercase",
                  letterSpacing: "0.4px",
                  padding: "6px 0",
                  borderBottom: "0.5px solid #eee",
                  marginBottom: 2,
                }}
              >
                {week.label}
              </div>
              {week.problems.map((p) => (
                <ProblemRow
                  key={p.id}
                  problem={p}
                  done={doneSet.has(p.id)}
                  onToggle={onToggle}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function DSAPlanner() {
  const [doneSet, setDoneSet] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setDoneSet(new Set(JSON.parse(saved) as string[]));
    } catch (_) {}
    setMounted(true);
  }, []);

  // Save to localStorage on change
  const toggle = useCallback((id: string) => {
    setDoneSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch (_) {}
      return next;
    });
  }, []);

  const doneCount = doneSet.size;
  const pct = mounted ? Math.round((doneCount / TOTAL_PROBLEMS) * 100) : 0;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "24px 16px", fontFamily: "sans-serif" }}>

      {/* Header banner */}
      <div
        style={{
          padding: "12px 16px",
          borderRadius: 10,
          background: "#f5f5f5",
          border: "0.5px solid #e0e0e0",
          marginBottom: 16,
          fontSize: 13,
          color: "#555",
          lineHeight: 1.7,
        }}
      >
        <strong style={{ color: "#111" }}>
          Full DSA Plan — March 2026 to April 2027
        </strong>
        <br />
        30 problems per topic · 1 per day · 1 hour · Click circles to mark done
      </div>

      {/* Global stats */}
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          marginBottom: 8,
        }}
      >
        {[
          { label: "Total", value: TOTAL_PROBLEMS, color: undefined },
          { label: "Done", value: mounted ? doneCount : 0, color: "#3B6D11" },
          { label: "Left", value: mounted ? TOTAL_PROBLEMS - doneCount : TOTAL_PROBLEMS, color: undefined },
          { label: "Progress", value: `${pct}%`, color: undefined },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              flex: 1,
              minWidth: 70,
              padding: "8px 12px",
              borderRadius: 8,
              background: "#f5f5f5",
              border: "0.5px solid #e0e0e0",
            }}
          >
            <div style={{ fontSize: 11, color: "#999" }}>{s.label}</div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 500,
                color: s.color ?? "inherit",
              }}
            >
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Global progress bar */}
      <div
        style={{
          height: 8,
          borderRadius: 4,
          background: "#eee",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            height: 8,
            borderRadius: 4,
            background: "#3B6D11",
            width: `${pct}%`,
            transition: "width 0.4s",
          }}
        />
      </div>

      {/* Topic cards */}
      {PLAN.map((topic, i) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          index={i}
          doneSet={doneSet}
          onToggle={toggle}
        />
      ))}

      <style>{`
        @media (min-width: 500px) {
          .prob-pat { display: block !important; }
        }
        * { box-sizing: border-box; }
        button:hover { opacity: 0.8; }
      `}</style>
    </div>
  );
}