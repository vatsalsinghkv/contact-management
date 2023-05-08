class Contact {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public status: 'active' | 'inactive'
  ) {}
}

export default Contact;
