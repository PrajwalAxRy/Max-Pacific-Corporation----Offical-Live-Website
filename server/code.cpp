#include <iostream>
#include <unordered_set>

using namespace std;

// Definition for singly-linked list.
struct SinglyLinkedListNode {
    int data;
    SinglyLinkedListNode* next;
    SinglyLinkedListNode(int x) : data(x), next(nullptr) {}
};

SinglyLinkedListNode* condense(SinglyLinkedListNode* head) {
    if (head == nullptr) {
        return nullptr;
    }

    unordered_set<int> seen;
    SinglyLinkedListNode* current = head;
    SinglyLinkedListNode* prev = nullptr;

    while (current != nullptr) {
        if (seen.find(current->data) != seen.end()) { 
            prev->next = current->next; 
        } else {
            seen.insert(current->data); 
            prev = current;
        }
        current = current->next;
    }

    return head;
}

// Function to print the linked list for testing purposes
void printList(SinglyLinkedListNode* head) {
    SinglyLinkedListNode* temp = head;
    while (temp != nullptr) {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << "nullptr" << endl;
}

// Helper function to create a new node
SinglyLinkedListNode* createNode(int data) {
    return new SinglyLinkedListNode(data);
}

// Main function to test the condense function
int main() {
    // Creating a linked list 3 -> 4 -> 3 -> 6
    SinglyLinkedListNode* head = createNode(1);
    head->next = createNode(2);
    head->next->next = createNode(1);
    head->next->next->next = createNode(3);

    cout << "Original list: ";
    printList(head);

    head = condense(head);

    cout << "Condensed list: ";
    printList(head);

    return 0;
}
