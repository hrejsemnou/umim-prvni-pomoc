import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EducationProvidersForm from "@/features/educationProviders/components/EducationProvidersForm";
import "@testing-library/jest-dom";
import { useAddEducationProviderMutation } from "@/lib/store/api";

async function goToFinalStep() {
  while (!screen.queryByRole("button", { name: "Odeslat" })) {
    const nextButton = screen.queryByRole("button", { name: "Další" });
    if (!nextButton) throw new Error('"Další" button not found');
    fireEvent.click(nextButton);

    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Další" }),
      ).toBeInTheDocument(),
    );
  }
}

// Mock implementation of window.scrollTo
const windowMock = {
  scrollTo: jest.fn(),
};

// Assign the mock to the global object
Object.assign(global, windowMock);

jest.mock("@/lib/store/api", () => ({
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

    fireEvent.click(screen.getByRole("button", { name: "Další" }));

    await waitFor(() => {
      expect(screen.queryByLabelText("Email*")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText("Email*"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByLabelText("Web*"), {
      target: { value: "test.example.com" },
    });

    await goToFinalStep();

    fireEvent.click(screen.getByRole("button", { name: "Odeslat" }));

    await waitFor(() => {
      expect(mockAdd).toHaveBeenCalledWith(
        expect.objectContaining({
          base: expect.objectContaining({
            name: "Testovací Název",
            subname: "",
            active: false,
          }),
          contact: expect.objectContaining({
            email: "test@example.com",
            website: "test.example.com",
          }),
        }),
      );
    });
  });

  it("doesn't allow going to the next step if name is missing", async () => {
    const mockAdd = jest.fn(() => ({
      unwrap: jest.fn().mockResolvedValue({}),
    }));
    (useAddEducationProviderMutation as jest.Mock).mockReturnValue([mockAdd]);

    render(<EducationProvidersForm />);

    fireEvent.change(screen.getByLabelText("Podnázev"), {
      target: { value: "Testovací Podnázev" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Další" }));

    await waitFor(() => {
      expect(screen.queryByLabelText("Název*")).toBeInTheDocument();
    });

    expect(screen.queryByLabelText("Email*")).not.toBeInTheDocument();
  });

  it("doesn't allow going to the next step if email is missing", async () => {
    const mockAdd = jest.fn(() => ({
      unwrap: jest.fn().mockResolvedValue({}),
    }));
    (useAddEducationProviderMutation as jest.Mock).mockReturnValue([mockAdd]);

    render(<EducationProvidersForm />);

    fireEvent.change(screen.getByLabelText("Název*"), {
      target: { value: "Testovací Název" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Další" }));

    await waitFor(() => {
      expect(screen.queryByLabelText("Email*")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText("Web*"), {
      target: { value: "test.example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Další" }));

    await waitFor(() => {
      expect(screen.queryByLabelText("Email*")).toBeInTheDocument();
      expect(screen.queryByLabelText("Web*")).toBeInTheDocument();
    });

    expect(screen.queryByLabelText("Kurzy živě")).not.toBeInTheDocument();
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

    fireEvent.click(screen.getByRole("button", { name: "Další" }));

    await waitFor(() => {
      expect(screen.queryByLabelText("Email*")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText("Email*"), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Další" }));

    await waitFor(() => {
      expect(screen.queryByLabelText("Email*")).toBeInTheDocument();
      expect(screen.queryByLabelText("Web*")).toBeInTheDocument();
    });

    expect(screen.queryByLabelText("Kurzy živě")).not.toBeInTheDocument();
  });
});
