def solve(arr, k):
    i, j, s = 0, 0, 0
    mx = 0
    while j < len(arr):
        s += arr[j]
        if s < k:
            j += 1
        elif s == k:
            mx = max(mx, j - i + 1)
            j += 1
        else:
            while s > k:
                s -= arr[i]
                i += 1
            j += 1
    return mx
