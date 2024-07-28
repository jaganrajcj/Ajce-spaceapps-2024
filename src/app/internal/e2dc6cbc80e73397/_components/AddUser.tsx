import { createUser } from "@/app/actions";
import { Button, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

const AddUser = ({
  fetchUsers,
  setOpen,
}: {
  fetchUsers: () => Promise<void>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleAddUser = async () => {
    // Reset error
    setError("");

    // Validate inputs
    if (!name.trim()) {
      setError("Name is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address.");
      return;
    }

    if (!password.trim()) {
      setError("Password is required.");
      return;
    }

    // Regex pattern to check for only numbers and alphabets and minimum 8 characters
    const passwordRegex = /^[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long and should contain numbers and alphabets."
      );
      return;
    }

    setLoading(true);

    try {
      const res = await createUser({ email, password, name });

      if (!res) {
        setError("Error occurred while adding new user");
      } else {
        fetchUsers();
      }
      // Clear the form fields after successful submission
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      //   setError(error.message);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <div className="mt-4 border-t pt-3 mb-4">
      <Typography variant="h6" className="font-semibold text-gray-700 mb-2">
        Add new user to access list
      </Typography>
      {error && (
        <Typography variant="small" className="text-red-600 mb-2">
          {error}
        </Typography>
      )}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-72">
          <Input
            label="Name"
            disabled={loading}
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="w-72">
          <Input
            label="Email"
            disabled={loading}
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="w-72">
          <Input
            type="password"
            label="Password"
            disabled={loading}
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <Button className="w-32" onClick={handleAddUser} disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </Button>
      </div>
    </div>
  );
};

export default AddUser;
