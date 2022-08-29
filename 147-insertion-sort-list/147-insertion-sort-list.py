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
            
            tmp1 = head
            tmp2 = cur.next
            tmp3 = head.next
            
            cur.next = head
            head.next = tmp2
            head = tmp3

            cur = parent

        return cur.next