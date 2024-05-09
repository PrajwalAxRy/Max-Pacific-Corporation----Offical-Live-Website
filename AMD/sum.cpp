def maxPerformance(efficiency, compatibility, k):
    n = len(efficiency)
    eng = [(compatibility[i], efficiency[i]) for i in range(n)]
    eng.sort(reverse=True)

    res, total_efficiency = 0, 0
    min_heap = []

    for eff, spd in eng:
        if len(min_heap) == k:
            total_efficiency -= heapq.heappop(min_heap)

        total_efficiency += spd
        heapq.heappush(min_heap, spd)
        res = max(res, eff * total_efficiency)

    return res % (10 ** 9 + 7)