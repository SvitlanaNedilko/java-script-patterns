interface OrganizationComponent {
  display(): void;
}

// Leaf: Represents an employee
class Employee implements OrganizationComponent {
  constructor(
    private name: string,
    private position: string
  ) {}

  display(): void {
    console.log(`Employee: ${this.name}, Position: ${this.position}`);
  }
}

// Composite: Represents a department
class Department implements OrganizationComponent {
  private children: OrganizationComponent[] = [];

  constructor(private name: string) {}

  add(component: OrganizationComponent): void {
    this.children.push(component);
  }

  remove(component: OrganizationComponent): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  display(): void {
    console.log(`Department: ${this.name}`);
    for (const child of this.children) {
      child.display();
    }
  }
}

// Usage
const salesDepartment = new Department('Sales');
const marketingDepartment = new Department('Marketing');

const john = new Employee('Olya', 'Sales Manager');
const jane = new Employee('Yana', 'Marketing Coordinator');

salesDepartment.add(john);
marketingDepartment.add(jane);

const parentOrganization = new Department('Parent Organization');
parentOrganization.add(salesDepartment);
parentOrganization.add(marketingDepartment);

export const composite = () => {
  console.log(parentOrganization.display());
};
