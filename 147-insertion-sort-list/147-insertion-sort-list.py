# Definition for singly-linked list.
# class ListNode:
#     def init(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur = parent = ListNode(None)

        while head:
            while cur.next and cur.next.val < head.val:
                cur = cur.next
            
            cur.next, cur.next.next, head = head, cur.next, head.next

            cur = parent

        return cur.next