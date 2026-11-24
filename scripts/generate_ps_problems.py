#!/usr/bin/env python3
"""Generate Problem Solving HTML pages (100+ problems, Python + JavaScript)."""
from __future__ import annotations

from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "public" / "html" / "Problem Solving"


def esc(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


def problem_html(i: int, p: dict) -> str:
    pid = p["id"]
    return f"""
        <section id="{pid}">
            <h2>{i}. {esc(p['title'])}</h2>
            <p><strong>Problem:</strong> {esc(p['problem'])}</p>
            <p><strong>Example:</strong> <code>{esc(p['example'])}</code></p>
            <p><strong>Approach:</strong> {esc(p['approach'])}</p>
            <h3>🐍 Python</h3>
            <div class="code-block">{esc(p['py'])}</div>
            <h3>⚡ JavaScript</h3>
            <div class="code-block">{esc(p['js'])}</div>
            <table>
                <tr><th>Time</th><th>Space</th><th>Pattern</th></tr>
                <tr><td>{esc(p['time'])}</td><td>{esc(p['space'])}</td><td>{esc(p['pattern'])}</td></tr>
            </table>
        </section>
"""


def page(level: str, icon_title: str, lead: str, overview: str, cards: list[tuple[str, str, str]],
         problems: list[dict], cheat: str, checkpoint: list[str], next_html: str) -> str:
    links = "\n".join(
        f'                <a href="#{p["id"]}" class="sidebar-link">{i}. {esc(p["title"])}</a>'
        for i, p in enumerate(problems, 1)
    )
    # Sidebar in chunks of ~15 for readability
    chunks = []
    for start in range(0, len(problems), 15):
        group = problems[start:start + 15]
        start_n = start + 1
        end_n = start + len(group)
        group_links = "\n".join(
            f'                <a href="#{p["id"]}" class="sidebar-link">{start + j}. {esc(p["title"])}</a>'
            for j, p in enumerate(group, 1)
        )
        chunks.append(f"""
        <div class="sidebar-section">
            <div class="sidebar-section-title">Problems {start_n}–{end_n}</div>
            <div class="sidebar-links">
{group_links}
            </div>
        </div>""")
    sidebar_problems = "\n".join(chunks)

    body = "\n".join(problem_html(i, p) for i, p in enumerate(problems, 1))
    card_html = "\n".join(
        f"""                <div class="feature-card {cls}">
                    <h4>{esc(title)}</h4>
                    <p>{esc(text)}</p>
                </div>"""
        for cls, title, text in cards
    )
    cp = "\n".join(f"                <li>{esc(x)}</li>" for x in checkpoint)

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Problem Solving — {esc(level)}</title>
    <link rel="stylesheet" href="/css/docs.css">
</head>
<body>
    <div class="mobile-toggle" onclick="toggleSidebar()">☰ Menu</div>

    <aside class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <div class="sidebar-title">{esc(icon_title)}</div>
        </div>
        <div class="sidebar-section">
            <div class="sidebar-section-title">Start</div>
            <div class="sidebar-links">
                <a href="#overview" class="sidebar-link">Overview</a>
                <a href="#how-to" class="sidebar-link">Daily practice</a>
            </div>
        </div>
{sidebar_problems}
        <div class="sidebar-section">
            <div class="sidebar-section-title">Finish</div>
            <div class="sidebar-links">
                <a href="#cheatsheet" class="sidebar-link">Cheat Sheet</a>
                <a href="#checkpoint" class="sidebar-link">Checkpoint</a>
            </div>
        </div>
    </aside>

    <div class="container">
        <header>
            <h1>🧩 Problem Solving — {esc(level)}</h1>
            <p>{lead}</p>
            <p><strong>{len(problems)} problems</strong> · every solution in Python and JavaScript · built for daily practice.</p>
        </header>

        <section id="overview">
            <h2>Overview</h2>
            <p>{overview}</p>
            <div class="grid-3">
{card_html}
            </div>
        </section>

        <section id="how-to">
            <h2>Daily practice</h2>
            <ol>
                <li>Pick 2–4 problems (mix new + one review).</li>
                <li>Solve in one language without peeking, then port to the other.</li>
                <li>Write time/space complexity before checking the answer.</li>
                <li>Mark tough ones and revisit after 2–3 days.</li>
            </ol>
            <div class="info-box">
                <h3>Tip</h3>
                <p>Same idea, different syntax: Python <code>dict</code>/<code>list</code> ↔ JavaScript <code>Map</code>/<code>Array</code>.</p>
            </div>
        </section>

{body}

        <section id="cheatsheet">
            <h2>Cheat sheet</h2>
{cheat}
        </section>

        <section id="checkpoint">
            <h2>Checkpoint</h2>
            <ul>
{cp}
            </ul>
            <div class="info-box">
                <h4>Continue</h4>
                {next_html}
            </div>
        </section>
    </div>

    <script>
        function toggleSidebar() {{
            document.getElementById('sidebar').classList.toggle('active');
        }}
        document.querySelectorAll('.sidebar a').forEach(link => {{
            link.addEventListener('click', () => {{
                if (window.innerWidth <= 1024) {{
                    document.getElementById('sidebar').classList.remove('active');
                }}
            }});
        }});
    </script>
</body>
</html>
"""


# ---------------------------------------------------------------------------
# BEGINNER (40)
# ---------------------------------------------------------------------------
BEGINNER = [
    dict(id="fizzbuzz", title="FizzBuzz", problem="Print 1..n; multiples of 3→Fizz, 5→Buzz, both→FizzBuzz.", example='n=5 → ["1","2","Fizz","4","Buzz"]', approach="Loop; check %15 before %3/%5.",
         py='def fizzbuzz(n):\n    out=[]\n    for i in range(1,n+1):\n        if i%15==0: out.append("FizzBuzz")\n        elif i%3==0: out.append("Fizz")\n        elif i%5==0: out.append("Buzz")\n        else: out.append(str(i))\n    return out',
         js='function fizzbuzz(n){\n  const out=[];\n  for(let i=1;i<=n;i++){\n    if(i%15===0) out.push("FizzBuzz");\n    else if(i%3===0) out.push("Fizz");\n    else if(i%5===0) out.push("Buzz");\n    else out.push(String(i));\n  }\n  return out;\n}',
         time="O(n)", space="O(n)", pattern="Conditionals"),
    dict(id="reverse-string", title="Reverse String", problem="Return the reverse of a string.", example='"hello" → "olleh"', approach="Slice or two pointers on a char array.",
         py='def reverse_string(s):\n    return s[::-1]',
         js='function reverseString(s){\n  return s.split("").reverse().join("");\n}',
         time="O(n)", space="O(n)", pattern="Two pointers / built-in"),
    dict(id="palindrome-number", title="Palindrome Number", problem="True if integer reads the same forward/backward.", example="121 → true; -121 → false", approach="String reverse or reverse half the digits.",
         py='def is_palindrome(x):\n    if x<0: return False\n    s=str(x)\n    return s==s[::-1]',
         js='function isPalindrome(x){\n  if(x<0) return false;\n  const s=String(x);\n  return s===s.split("").reverse().join("");\n}',
         time="O(d)", space="O(d)", pattern="Two pointers"),
    dict(id="two-sum", title="Two Sum", problem="Return indices of two numbers that add to target.", example="[2,7,11,15], 9 → [0,1]", approach="One-pass hash map of value→index.",
         py='def two_sum(nums,target):\n    seen={}\n    for i,n in enumerate(nums):\n        if target-n in seen: return [seen[target-n],i]\n        seen[n]=i\n    return []',
         js='function twoSum(nums,target){\n  const seen=new Map();\n  for(let i=0;i<nums.length;i++){\n    const need=target-nums[i];\n    if(seen.has(need)) return [seen.get(need),i];\n    seen.set(nums[i],i);\n  }\n  return [];\n}',
         time="O(n)", space="O(n)", pattern="Hash map"),
    dict(id="max-min", title="Max and Min", problem="Return max and min in an array.", example="[3,1,9,2] → {max:9,min:1}", approach="Single pass track running max/min.",
         py='def max_min(nums):\n    mx=mn=nums[0]\n    for n in nums[1:]:\n        mx=max(mx,n); mn=min(mn,n)\n    return {"max":mx,"min":mn}',
         js='function maxMin(nums){\n  let mx=mn=nums[0];\n  for(let i=1;i<nums.length;i++){\n    mx=Math.max(mx,nums[i]); mn=Math.min(mn,nums[i]);\n  }\n  return {max:mx,min:mn};\n}',
         time="O(n)", space="O(1)", pattern="Single pass"),
    dict(id="count-vowels", title="Count Vowels", problem="Count aeiou (case-insensitive) in a string.", example='"Hello" → 2', approach="Set of vowels; count membership.",
         py='def count_vowels(s):\n    v=set("aeiouAEIOU")\n    return sum(1 for c in s if c in v)',
         js='function countVowels(s){\n  const v=new Set("aeiouAEIOU");\n  let c=0; for(const ch of s) if(v.has(ch)) c++;\n  return c;\n}',
         time="O(n)", space="O(1)", pattern="Set"),
    dict(id="remove-duplicates", title="Remove Duplicates (Sorted)", problem="In-place unique prefix on sorted array; return new length.", example="[1,1,2] → 2, [1,2,_]", approach="Slow/fast two pointers.",
         py='def remove_duplicates(nums):\n    if not nums: return 0\n    s=0\n    for f in range(1,len(nums)):\n        if nums[f]!=nums[s]:\n            s+=1; nums[s]=nums[f]\n    return s+1',
         js='function removeDuplicates(nums){\n  if(!nums.length) return 0;\n  let s=0;\n  for(let f=1;f<nums.length;f++){\n    if(nums[f]!==nums[s]){ s++; nums[s]=nums[f]; }\n  }\n  return s+1;\n}',
         time="O(n)", space="O(1)", pattern="Two pointers"),
    dict(id="factorial", title="Factorial", problem="Compute n! (0!=1).", example="5 → 120", approach="Iterative multiply 2..n.",
         py='def factorial(n):\n    r=1\n    for i in range(2,n+1): r*=i\n    return r',
         js='function factorial(n){\n  let r=1; for(let i=2;i<=n;i++) r*=i; return r;\n}',
         time="O(n)", space="O(1)", pattern="Loop"),
    dict(id="sum-array", title="Sum of Array", problem="Return the sum of all elements.", example="[1,2,3,4] → 10", approach="Accumulate in one pass.",
         py='def sum_array(nums):\n    return sum(nums)',
         js='function sumArray(nums){\n  return nums.reduce((a,b)=>a+b,0);\n}',
         time="O(n)", space="O(1)", pattern="Reduce"),
    dict(id="average", title="Average of Array", problem="Return the arithmetic mean.", example="[2,4,6] → 4", approach="Sum / length (guard empty).",
         py='def average(nums):\n    return sum(nums)/len(nums) if nums else 0',
         js='function average(nums){\n  if(!nums.length) return 0;\n  return nums.reduce((a,b)=>a+b,0)/nums.length;\n}',
         time="O(n)", space="O(1)", pattern="Aggregate"),
    dict(id="even-odd-count", title="Count Even and Odd", problem="Count how many even and odd numbers.", example="[1,2,3,4] → {even:2,odd:2}", approach="Check n%2.",
         py='def even_odd(nums):\n    e=sum(1 for n in nums if n%2==0)\n    return {"even":e,"odd":len(nums)-e}',
         js='function evenOdd(nums){\n  let e=0; for(const n of nums) if(n%2===0) e++;\n  return {even:e,odd:nums.length-e};\n}',
         time="O(n)", space="O(1)", pattern="Parity"),
    dict(id="fibonacci", title="Nth Fibonacci", problem="Return F(n) with F(0)=0, F(1)=1.", example="n=6 → 8", approach="Iterative a,b rolling pair.",
         py='def fib(n):\n    a,b=0,1\n    for _ in range(n): a,b=b,a+b\n    return a',
         js='function fib(n){\n  let a=0,b=1;\n  for(let i=0;i<n;i++){ [a,b]=[b,a+b]; }\n  return a;\n}',
         time="O(n)", space="O(1)", pattern="Iteration"),
    dict(id="is-prime", title="Check Prime", problem="True if n is prime (n>1).", example="7 → true; 9 → false", approach="Trial divide up to sqrt(n).",
         py='import math\ndef is_prime(n):\n    if n<=1: return False\n    for i in range(2,int(math.sqrt(n))+1):\n        if n%i==0: return False\n    return True',
         js='function isPrime(n){\n  if(n<=1) return false;\n  for(let i=2;i*i<=n;i++) if(n%i===0) return false;\n  return true;\n}',
         time="O(√n)", space="O(1)", pattern="Math"),
    dict(id="power-of-two", title="Power of Two", problem="True if n is a power of 2.", example="16 → true; 18 → false", approach="n>0 and (n & (n-1))==0.",
         py='def is_power_of_two(n):\n    return n>0 and (n & (n-1))==0',
         js='function isPowerOfTwo(n){\n  return n>0 && (n & (n-1))===0;\n}',
         time="O(1)", space="O(1)", pattern="Bit tricks"),
    dict(id="contains-duplicate", title="Contains Duplicate", problem="True if any value appears at least twice.", example="[1,2,3,1] → true", approach="Hash set of seen values.",
         py='def contains_duplicate(nums):\n    return len(nums)!=len(set(nums))',
         js='function containsDuplicate(nums){\n  return new Set(nums).size!==nums.length;\n}',
         time="O(n)", space="O(n)", pattern="Hash set"),
    dict(id="missing-number", title="Missing Number", problem="Array of n distinct in 0..n; find the missing one.", example="[3,0,1] → 2", approach="XOR all indices and values, or Gauss sum.",
         py='def missing_number(nums):\n    n=len(nums)\n    return n*(n+1)//2 - sum(nums)',
         js='function missingNumber(nums){\n  const n=nums.length;\n  return n*(n+1)/2 - nums.reduce((a,b)=>a+b,0);\n}',
         time="O(n)", space="O(1)", pattern="Math / XOR"),
    dict(id="move-zeroes", title="Move Zeroes", problem="Move all 0s to end, keep relative order of others.", example="[0,1,0,3,12] → [1,3,12,0,0]", approach="Slow pointer for next non-zero write.",
         py='def move_zeroes(nums):\n    s=0\n    for f in range(len(nums)):\n        if nums[f]!=0:\n            nums[s],nums[f]=nums[f],nums[s]\n            s+=1\n    return nums',
         js='function moveZeroes(nums){\n  let s=0;\n  for(let f=0;f<nums.length;f++){\n    if(nums[f]!==0){ [nums[s],nums[f]]=[nums[f],nums[s]]; s++; }\n  }\n  return nums;\n}',
         time="O(n)", space="O(1)", pattern="Two pointers"),
    dict(id="plus-one", title="Plus One", problem="Digits of a large integer as array; add one.", example="[1,2,9] → [1,3,0]", approach="Carry from the end; prepend 1 if needed.",
         py='def plus_one(digits):\n    for i in range(len(digits)-1,-1,-1):\n        if digits[i]<9:\n            digits[i]+=1; return digits\n        digits[i]=0\n    return [1]+digits',
         js='function plusOne(digits){\n  for(let i=digits.length-1;i>=0;i--){\n    if(digits[i]<9){ digits[i]++; return digits; }\n    digits[i]=0;\n  }\n  return [1,...digits];\n}',
         time="O(n)", space="O(1)", pattern="Carry"),
    dict(id="intersection", title="Intersection of Two Arrays", problem="Return unique intersection of two arrays.", example="[1,2,2,1],[2,2] → [2]", approach="Set intersection.",
         py='def intersection(a,b):\n    return list(set(a)&set(b))',
         js='function intersection(a,b){\n  const sb=new Set(b);\n  return [...new Set(a.filter(x=>sb.has(x)))];\n}',
         time="O(n+m)", space="O(n+m)", pattern="Set"),
    dict(id="majority-element", title="Majority Element", problem="Element appearing more than n/2 times (guaranteed).", example="[2,2,1,1,1,2,2] → 2", approach="Boyer-Moore voting or hash count.",
         py='def majority_element(nums):\n    cand=None; count=0\n    for n in nums:\n        if count==0: cand=n\n        count+=1 if n==cand else -1\n    return cand',
         js='function majorityElement(nums){\n  let cand=null,count=0;\n  for(const n of nums){\n    if(count===0) cand=n;\n    count+= n===cand?1:-1;\n  }\n  return cand;\n}',
         time="O(n)", space="O(1)", pattern="Boyer-Moore"),
    dict(id="single-number", title="Single Number", problem="Every element appears twice except one; find it.", example="[4,1,2,1,2] → 4", approach="XOR all numbers.",
         py='def single_number(nums):\n    r=0\n    for n in nums: r^=n\n    return r',
         js='function singleNumber(nums){\n  return nums.reduce((a,b)=>a^b,0);\n}',
         time="O(n)", space="O(1)", pattern="XOR"),
    dict(id="climb-stairs", title="Climbing Stairs", problem="n steps; 1 or 2 at a time. Ways to climb.", example="n=3 → 3", approach="Fibonacci DP: ways(i)=ways(i-1)+ways(i-2).",
         py='def climb_stairs(n):\n    a,b=1,1\n    for _ in range(n): a,b=b,a+b\n    return a',
         js='function climbStairs(n){\n  let a=1,b=1;\n  for(let i=0;i<n;i++) [a,b]=[b,a+b];\n  return a;\n}',
         time="O(n)", space="O(1)", pattern="DP intro"),
    dict(id="best-time-stock", title="Best Time to Buy/Sell Stock I", problem="Max profit from one buy and one sell.", example="[7,1,5,3,6,4] → 5", approach="Track min price so far; max profit = price-min.",
         py='def max_profit(prices):\n    mn=float("inf"); best=0\n    for p in prices:\n        mn=min(mn,p); best=max(best,p-mn)\n    return best',
         js='function maxProfit(prices){\n  let mn=Infinity,best=0;\n  for(const p of prices){ mn=Math.min(mn,p); best=Math.max(best,p-mn); }\n  return best;\n}',
         time="O(n)", space="O(1)", pattern="Running min"),
    dict(id="valid-parentheses", title="Valid Parentheses", problem="True if brackets (),{},[] are correctly matched.", example='"()[]{}" → true', approach="Stack of opening brackets.",
         py='def is_valid(s):\n    pair={")":"(","]":"[","}":"{"}; st=[]\n    for c in s:\n        if c in pair:\n            if not st or st.pop()!=pair[c]: return False\n        else: st.append(c)\n    return not st',
         js='function isValid(s){\n  const pair={")":"(","]":"[","}":"{"}, st=[];\n  for(const c of s){\n    if(c in pair){ if(st.pop()!==pair[c]) return false; }\n    else st.push(c);\n  }\n  return st.length===0;\n}',
         time="O(n)", space="O(n)", pattern="Stack"),
    dict(id="merge-sorted-arrays", title="Merge Two Sorted Arrays", problem="Merge two sorted arrays into one sorted array.", example="[1,3],[2,4] → [1,2,3,4]", approach="Two pointers from starts.",
         py='def merge(a,b):\n    i=j=0; out=[]\n    while i<len(a) and j<len(b):\n        if a[i]<=b[j]: out.append(a[i]); i+=1\n        else: out.append(b[j]); j+=1\n    return out+a[i:]+b[j:]',
         js='function merge(a,b){\n  let i=0,j=0; const out=[];\n  while(i<a.length&&j<b.length){\n    if(a[i]<=b[j]) out.push(a[i++]); else out.push(b[j++]);\n  }\n  return out.concat(a.slice(i),b.slice(j));\n}',
         time="O(n+m)", space="O(n+m)", pattern="Two pointers"),
    dict(id="reverse-linked-list", title="Reverse Linked List", problem="Reverse a singly linked list; return new head.", example="1→2→3 → 3→2→1", approach="Iterative prev/curr/next pointers.",
         py='def reverse_list(head):\n    prev=None\n    while head:\n        nxt=head.next\n        head.next=prev\n        prev=head\n        head=nxt\n    return prev',
         js='function reverseList(head){\n  let prev=null;\n  while(head){\n    const nxt=head.next;\n    head.next=prev;\n    prev=head;\n    head=nxt;\n  }\n  return prev;\n}',
         time="O(n)", space="O(1)", pattern="Linked list"),
    dict(id="middle-linked-list", title="Middle of Linked List", problem="Return the middle node (second middle if even).", example="1→2→3→4→5 → 3", approach="Slow/fast: fast moves 2, slow 1.",
         py='def middle_node(head):\n    slow=fast=head\n    while fast and fast.next:\n        slow=slow.next; fast=fast.next.next\n    return slow',
         js='function middleNode(head){\n  let slow=head,fast=head;\n  while(fast&&fast.next){ slow=slow.next; fast=fast.next.next; }\n  return slow;\n}',
         time="O(n)", space="O(1)", pattern="Two pointers"),
    dict(id="happy-number", title="Happy Number", problem="Replace n by sum of squares of digits; true if reaches 1.", example="19 → true", approach="Floyd cycle or set of seen values.",
         py='def is_happy(n):\n    def nxt(x): return sum(int(d)**2 for d in str(x))\n    seen=set()\n    while n!=1 and n not in seen:\n        seen.add(n); n=nxt(n)\n    return n==1',
         js='function isHappy(n){\n  const nxt=x=>String(x).split("").reduce((a,d)=>a+(+d)**2,0);\n  const seen=new Set();\n  while(n!==1&&!seen.has(n)){ seen.add(n); n=nxt(n); }\n  return n===1;\n}',
         time="O(log n)", space="O(log n)", pattern="Cycle detection"),
    dict(id="roman-to-int", title="Roman to Integer", problem="Convert Roman numeral string to integer.", example='"MCMXCIV" → 1994', approach="Scan; if next > current, subtract.",
         py='def roman_to_int(s):\n    val={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}\n    total=0\n    for i,c in enumerate(s):\n        if i+1<len(s) and val[c]<val[s[i+1]]: total-=val[c]\n        else: total+=val[c]\n    return total',
         js='function romanToInt(s){\n  const val={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};\n  let total=0;\n  for(let i=0;i<s.length;i++){\n    if(i+1<s.length&&val[s[i]]<val[s[i+1]]) total-=val[s[i]];\n    else total+=val[s[i]];\n  }\n  return total;\n}',
         time="O(n)", space="O(1)", pattern="Map lookup"),
    dict(id="longest-common-prefix", title="Longest Common Prefix", problem="Longest shared prefix among string array.", example='["flower","flow","flight"] → "fl"', approach="Vertical scan char by char.",
         py='def longest_common_prefix(strs):\n    if not strs: return ""\n    for i,ch in enumerate(strs[0]):\n        for s in strs[1:]:\n            if i>=len(s) or s[i]!=ch: return strs[0][:i]\n    return strs[0]',
         js='function longestCommonPrefix(strs){\n  if(!strs.length) return "";\n  for(let i=0;i<strs[0].length;i++){\n    const ch=strs[0][i];\n    for(let j=1;j<strs.length;j++){\n      if(i>=strs[j].length||strs[j][i]!==ch) return strs[0].slice(0,i);\n    }\n  }\n  return strs[0];\n}',
         time="O(n·m)", space="O(1)", pattern="String scan"),
    dict(id="search-insert", title="Search Insert Position", problem="Index where target is or should be inserted (sorted).", example="[1,3,5,6], 2 → 1", approach="Binary search lower bound.",
         py='def search_insert(nums,target):\n    lo,hi=0,len(nums)\n    while lo<hi:\n        mid=(lo+hi)//2\n        if nums[mid]<target: lo=mid+1\n        else: hi=mid\n    return lo',
         js='function searchInsert(nums,target){\n  let lo=0,hi=nums.length;\n  while(lo<hi){\n    const mid=(lo+hi)>>1;\n    if(nums[mid]<target) lo=mid+1; else hi=mid;\n  }\n  return lo;\n}',
         time="O(log n)", space="O(1)", pattern="Binary search"),
    dict(id="length-last-word", title="Length of Last Word", problem="Length of last word in a string (spaces).", example='"Hello World" → 5', approach="Trim; count from end until space.",
         py='def length_of_last_word(s):\n    return len(s.strip().split()[-1])',
         js='function lengthOfLastWord(s){\n  const parts=s.trim().split(/\\s+/);\n  return parts[parts.length-1].length;\n}',
         time="O(n)", space="O(n)", pattern="String"),
    dict(id="isomorphic", title="Isomorphic Strings", problem="True if characters map 1:1 between s and t.", example='"egg","add" → true', approach="Two maps (or map+set) for bijection.",
         py='def is_isomorphic(s,t):\n    if len(s)!=len(t): return False\n    m1,m2={},{}\n    for a,b in zip(s,t):\n        if m1.get(a,b)!=b or m2.get(b,a)!=a: return False\n        m1[a]=b; m2[b]=a\n    return True',
         js='function isIsomorphic(s,t){\n  if(s.length!==t.length) return false;\n  const m1=new Map(), m2=new Map();\n  for(let i=0;i<s.length;i++){\n    const a=s[i],b=t[i];\n    if((m1.has(a)&&m1.get(a)!==b)||(m2.has(b)&&m2.get(b)!==a)) return false;\n    m1.set(a,b); m2.set(b,a);\n  }\n  return true;\n}',
         time="O(n)", space="O(k)", pattern="Hash map"),
    dict(id="first-unique-char", title="First Unique Character", problem="Index of first non-repeating char; else -1.", example='"leetcode" → 0', approach="Frequency count then second pass.",
         py='from collections import Counter\ndef first_uniq_char(s):\n    c=Counter(s)\n    for i,ch in enumerate(s):\n        if c[ch]==1: return i\n    return -1',
         js='function firstUniqChar(s){\n  const c=new Map();\n  for(const ch of s) c.set(ch,(c.get(ch)||0)+1);\n  for(let i=0;i<s.length;i++) if(c.get(s[i])===1) return i;\n  return -1;\n}',
         time="O(n)", space="O(k)", pattern="Frequency"),
    dict(id="ransom-note", title="Ransom Note", problem="True if ransomNote can be built from magazine letters.", example='"aa","aab" → true', approach="Count magazine; decrement for note.",
         py='from collections import Counter\ndef can_construct(note,mag):\n    return not (Counter(note)-Counter(mag))',
         js='function canConstruct(note,mag){\n  const c=new Map();\n  for(const ch of mag) c.set(ch,(c.get(ch)||0)+1);\n  for(const ch of note){\n    if(!c.get(ch)) return false;\n    c.set(ch,c.get(ch)-1);\n  }\n  return true;\n}',
         time="O(n+m)", space="O(k)", pattern="Frequency"),
    dict(id="add-digits", title="Add Digits (Digital Root)", problem="Repeatedly sum digits until single digit.", example="38 → 2", approach="Loop or O(1): 1+(n-1)%9.",
         py='def add_digits(n):\n    return 0 if n==0 else 1+(n-1)%9',
         js='function addDigits(n){\n  return n===0?0:1+(n-1)%9;\n}',
         time="O(1)", space="O(1)", pattern="Math"),
    dict(id="sqrt-x", title="Sqrt(x)", problem="Integer square root (floor) of non-negative x.", example="8 → 2", approach="Binary search on 0..x.",
         py='def my_sqrt(x):\n    lo,hi=0,x\n    while lo<=hi:\n        mid=(lo+hi)//2\n        if mid*mid<=x: lo=mid+1\n        else: hi=mid-1\n    return hi',
         js='function mySqrt(x){\n  let lo=0,hi=x;\n  while(lo<=hi){\n    const mid=(lo+hi)>>1;\n    if(mid*mid<=x) lo=mid+1; else hi=mid-1;\n  }\n  return hi;\n}',
         time="O(log x)", space="O(1)", pattern="Binary search"),
    dict(id="valid-perfect-square", title="Valid Perfect Square", problem="True if num is a perfect square.", example="16 → true", approach="Binary search; mid*mid == num.",
         py='def is_perfect_square(num):\n    lo,hi=1,num\n    while lo<=hi:\n        mid=(lo+hi)//2\n        sq=mid*mid\n        if sq==num: return True\n        if sq<num: lo=mid+1\n        else: hi=mid-1\n    return False',
         js='function isPerfectSquare(num){\n  let lo=1,hi=num;\n  while(lo<=hi){\n    const mid=(lo+hi)>>1, sq=mid*mid;\n    if(sq===num) return true;\n    if(sq<num) lo=mid+1; else hi=mid-1;\n  }\n  return false;\n}',
         time="O(log n)", space="O(1)", pattern="Binary search"),
    dict(id="hamming-weight", title="Number of 1 Bits", problem="Count set bits in unsigned integer.", example="11 (1011) → 3", approach="n &= n-1 clears lowest set bit.",
         py='def hamming_weight(n):\n    c=0\n    while n:\n        n&=n-1; c+=1\n    return c',
         js='function hammingWeight(n){\n  let c=0;\n  while(n){ n&=n-1; c++; }\n  return c;\n}',
         time="O(bits)", space="O(1)", pattern="Bit tricks"),
    dict(id="pascal-row", title="Pascal Triangle Row", problem="Return row index (0-based) of Pascal's triangle.", example="rowIndex=3 → [1,3,3,1]", approach="Build row using C(n,k) ratios.",
         py='def get_row(row_index):\n    row=[1]\n    for k in range(1,row_index+1):\n        row.append(row[-1]*(row_index-k+1)//k)\n    return row',
         js='function getRow(rowIndex){\n  const row=[1];\n  for(let k=1;k<=rowIndex;k++){\n    row.push(Math.floor(row[row.length-1]*(rowIndex-k+1)/k));\n  }\n  return row;\n}',
         time="O(n)", space="O(n)", pattern="Combinatorics"),
]
assert len(BEGINNER) == 40

import sys
_SCRIPTS = Path(__file__).resolve().parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))
from ps_medium import MEDIUM  # noqa: E402
from ps_advanced import ADVANCED  # noqa: E402


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    beginner_cheat = """            <table>
                <tr><th>Need</th><th>Python</th><th>JavaScript</th></tr>
                <tr><td>Hash map</td><td><code>dict</code></td><td><code>Map</code> / <code>{}</code></td></tr>
                <tr><td>Set</td><td><code>set()</code></td><td><code>new Set()</code></td></tr>
                <tr><td>Indexed loop</td><td><code>enumerate</code></td><td><code>for (let i=0;…)</code></td></tr>
                <tr><td>Integer divide</td><td><code>//</code></td><td><code>Math.floor</code></td></tr>
            </table>"""

    medium_cheat = """            <table>
                <tr><th>Pattern</th><th>When</th></tr>
                <tr><td>Sliding window</td><td>Contiguous unique / constraint</td></tr>
                <tr><td>Two pointers</td><td>Sorted array / ends inward</td></tr>
                <tr><td>Binary search</td><td>Sorted search space</td></tr>
                <tr><td>BFS / topo</td><td>Levels, prerequisites</td></tr>
                <tr><td>Monotonic stack</td><td>Next greater / warmer day</td></tr>
            </table>"""

    advanced_cheat = """            <table>
                <tr><th>Pattern</th><th>Ask</th></tr>
                <tr><td>DP</td><td>Optimal over smaller states?</td></tr>
                <tr><td>Backtracking</td><td>All / any valid configs?</td></tr>
                <tr><td>Graphs</td><td>Shortest / bridges / topo?</td></tr>
                <tr><td>Design</td><td>O(1) ops with hash + order?</td></tr>
            </table>"""

    (OUT / "ps-beginner.html").write_text(
        page(
            "Beginner",
            "🧩 Beginner",
            "Warm-up problems with full solutions in <strong>Python</strong> and <strong>JavaScript</strong>.",
            "<span class=\"highlight\">40 beginner problems</span> for loops, arrays, strings, bits, and hash maps — ideal for daily reps.",
            [
                ("card-teal", "Skills", "Loops, arrays, strings, hash maps, linked-list basics."),
                ("card-orange", "Pace", "2–4 problems/day → finish this set in ~2 weeks."),
                ("card-purple", "Languages", "Every problem has matching Python and JavaScript."),
            ],
            BEGINNER,
            beginner_cheat,
            [
                "Solve Two Sum, Valid Parentheses, and Move Zeroes cold in both languages",
                "Explain Boyer-Moore majority and XOR single-number",
                "State time/space for each problem you practiced this week",
            ],
            '<p>Next: <a href="/learn/ps-medium">Medium</a> (35 problems).</p>',
        ),
        encoding="utf-8",
    )

    (OUT / "ps-medium.html").write_text(
        page(
            "Medium",
            "🧩 Medium",
            "Interview-style patterns — sliding window, graphs, trees — each in <strong>Python</strong> and <strong>JavaScript</strong>.",
            "<span class=\"highlight\">35 medium problems</span> where pattern recognition beats brute force.",
            [
                ("card-teal", "Patterns", "Window, two pointers, BFS, topo, monotonic stack."),
                ("card-orange", "Pace", "2–3 problems/day with one review problem."),
                ("card-purple", "Goal", "Name the pattern before you write code."),
            ],
            MEDIUM,
            medium_cheat,
            [
                "Implement sliding window and 3Sum without notes",
                "Explain course-schedule topo sort on a whiteboard",
                "Derive product-except-self and merge intervals",
            ],
            '<p>Next: <a href="/learn/ps-advanced">Advanced</a> · Review: <a href="/learn/ps-beginner">Beginner</a>.</p>',
        ),
        encoding="utf-8",
    )

    (OUT / "ps-advanced.html").write_text(
        page(
            "Advanced",
            "🧩 Advanced",
            "DP, backtracking, graphs, and design problems — <strong>Python</strong> and <strong>JavaScript</strong> for each.",
            "<span class=\"highlight\">30 advanced problems</span> for deep practice after medium patterns are solid.",
            [
                ("card-teal", "DP & search", "Coin change, LCS, edit distance, backtracking."),
                ("card-orange", "Graphs", "Dijkstra, islands, bridges, network delay."),
                ("card-purple", "Design", "LRU, Trie, time-based key-value."),
            ],
            ADVANCED,
            advanced_cheat,
            [
                "Write coin-change and edit-distance DP from scratch",
                "Implement N-Queens and word-search with undo",
                "Sketch LRU and sliding-window maximum",
            ],
            '<p>Review: <a href="/learn/ps-beginner">Beginner</a> · <a href="/learn/ps-medium">Medium</a> · <a href="/learn/dsa-fundamentals">DSA</a>.</p>',
        ),
        encoding="utf-8",
    )

    total = len(BEGINNER) + len(MEDIUM) + len(ADVANCED)
    print(f"Wrote {OUT}")
    print(f"Beginner={len(BEGINNER)} Medium={len(MEDIUM)} Advanced={len(ADVANCED)} Total={total}")


if __name__ == "__main__":
    main()
