class DocumentUtil {
  constructor() { }

  formatCpf(id: string): string | null {
    if (id.length != 11) {
      return null;
    }
    return id.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }

  formatCnpj(id: string): string | null {
    if (id.length != 14) {
      return null;
    }
    return id.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
  }
}

export default new DocumentUtil();
