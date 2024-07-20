def can_part(arr):
    total_sum = sum(arr)
    if total_sum % 2 != 0:
        return False

    else:
        return is_equal_sum(arr, len(arr), total_sum / 2)


def is_equal_sum(arr, n, sum):
    if sum == 0:
        return True
    if n == 0:
        return False

    if arr[n - 1] > sum:
        return is_equal_sum(arr, n - 1, sum)
    else:
        return is_equal_sum(arr, n - 1, sum) or is_equal_sum(
            arr, n - 1, sum - arr[n - 1]
        )


# print(can_part([1, 2, 3, 4, 5, 6, 11]))


def can_part_dp(arr):
    total_sum = sum(arr)
    if total_sum % 2 != 0:
        return False

    n = len(arr)
    m = total_sum // 2
    t = [[0 for _ in range(n)] for _ in range(m)]

    for i in range(len(t)):
        for j in range(len(t[i])):
            if j == 0:
                t[i][j] = True
            if i == 0:
                t[i][j] = False


can_part_dp([1, 2, 3, 4, 5, 6, 11])
