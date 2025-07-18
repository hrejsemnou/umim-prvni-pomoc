import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EducationProvidersForm from "@/features/educationProviders/components/EducationProvidersForm";
import "@testing-library/jest-dom";
import { useAddEducationProviderMutation } from "@/lib/store/supabaseApi";

jest.mock("@/lib/store/supabaseApi", () => ({
  useAddEducationProviderMutation: jest.fn(),
}));

describe("EducationProvidersForm", () => {
  it("submits the form with required fields", async () => {
    const mockAdd = jest.fn(() => ({
      unwrap: jest.fn().mockResolvedValue({}),
    }));
    (useAddEducationProviderMutation as jest.Mock).mockReturnValue([mockAdd]);

    render(<EducationProvidersForm />);

    fireEvent.change(screen.getByLabelText("Název*"), {
      target: { value: "Testovací Název" },
    });

    fireEvent.change(screen.getByLabelText("Email*"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByLabelText("Web*"), {
      target: { value: "test.example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Odeslat" }));

    await waitFor(() => {
      expect(mockAdd).toHaveBeenCalledWith(
        expect.objectContaining({
          base: expect.objectContaining({
            name: "Testovací Název",
            subname: "",
            active: false,
          }),
          contact: expect.objectContaining({ email: "test@example.com" }),
        }),
      );
    });
  });

  it("doesn't submit the form if name is missing", async () => {
    const mockAdd = jest.fn(() => ({
      unwrap: jest.fn().mockResolvedValue({}),
    }));
    (useAddEducationProviderMutation as jest.Mock).mockReturnValue([mockAdd]);

    render(<EducationProvidersForm />);

    fireEvent.change(screen.getByLabelText("Podnázev"), {
      target: { value: "Testovací Podnázev" },
    });

    fireEvent.change(screen.getByLabelText("Email*"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByLabelText("Web*"), {
      target: { value: "test.example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Odeslat" }));

    await waitFor(() => {
      expect(mockAdd).not.toHaveBeenCalled();
    });
  });

  it("doesn't submit the form if email is missing", async () => {
    const mockAdd = jest.fn(() => ({
      unwrap: jest.fn().mockResolvedValue({}),
    }));
    (useAddEducationProviderMutation as jest.Mock).mockReturnValue([mockAdd]);

    render(<EducationProvidersForm />);

    fireEvent.change(screen.getByLabelText("Název*"), {
      target: { value: "Testovací Název" },
    });

    fireEvent.change(screen.getByLabelText("Telefon"), {
      target: { value: "222444888" },
    });

    fireEvent.change(screen.getByLabelText("Web*"), {
      target: { value: "test.example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Odeslat" }));

    await waitFor(() => {
      expect(mockAdd).not.toHaveBeenCalled();
    });
  });

  it("doesn't submit the form if website url is missing", async () => {
    const mockAdd = jest.fn(() => ({
      unwrap: jest.fn().mockResolvedValue({}),
    }));
    (useAddEducationProviderMutation as jest.Mock).mockReturnValue([mockAdd]);

    render(<EducationProvidersForm />);

    fireEvent.change(screen.getByLabelText("Název*"), {
      target: { value: "Testovací Název" },
    });

    fireEvent.change(screen.getByLabelText("Email*"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByLabelText("Telefon"), {
      target: { value: "222444888" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Odeslat" }));

    await waitFor(() => {
      expect(mockAdd).not.toHaveBeenCalled();
    });
  });
});
